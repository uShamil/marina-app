import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";
import PageBanner from "../components/layout/PageBanner";
import { useMarinaAvailability } from "../hooks/useMarinaAvailability";

export default function MarinaDetail() {
  const { id } = useParams();

  const [marina, setMarina] = useState(null);
  const [loading, setLoading] = useState(true);

  // Booking form states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Booking submit state
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState("");

  // 🔹 Availability hook
  const { availability, loading: availabilityLoading, error: availabilityError } = useMarinaAvailability(id);

  useEffect(() => {
    const fetchMarina = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("marinas").select("*").eq("id", id).single();

      if (!error) setMarina(data);
      setLoading(false);
    };

    fetchMarina();
  }, [id]);

  // Helpers
  const toDate = (s) => (s ? new Date(`${s}T00:00:00`) : null);

  const daysCount = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const s = toDate(startDate);
    const e = toDate(endDate);
    if (!s || !e) return 0;

    const diff = e.getTime() - s.getTime();
    const days = diff / (1000 * 60 * 60 * 24) + 1; // inclusive
    if (Number.isNaN(days) || days <= 0) return 0;
    return Math.floor(days);
  }, [startDate, endDate]);

  const totalPrice = useMemo(() => {
    if (!marina) return 0;
    if (daysCount <= 0) return marina.price;
    return daysCount * marina.price;
  }, [daysCount, marina]);

  const selectedDays = useMemo(() => {
    if (!startDate || !endDate) return [];
    if (!Array.isArray(availability) || availability.length === 0) return [];

    return availability.filter((day) => day.date >= startDate && day.date <= endDate);
  }, [availability, startDate, endDate]);

  const isRangeAvailable = useMemo(() => {
    // must have valid range
    if (!startDate || !endDate) return false;
    if (daysCount <= 0) return false;

    // if availability still loading, don’t allow booking yet
    if (availabilityLoading) return false;

    // if hook errored, be safe: don’t allow booking
    if (availabilityError) return false;

    // If your availability hook returns only a limited window,
    // you can treat missing days as unavailable to avoid bad bookings.
    if (selectedDays.length !== daysCount) return false;

    return selectedDays.every((d) => d.is_available);
  }, [startDate, endDate, daysCount, availabilityLoading, availabilityError, selectedDays]);

  const canBook = isRangeAvailable && !bookingSubmitting;

  const handleBooking = async () => {
    setBookingError("");
    setBookingSuccess("");

    if (!startDate || !endDate) {
      setBookingError("Please select start and end date.");
      return;
    }

    if (daysCount <= 0) {
      setBookingError("End date must be the same or after start date.");
      return;
    }

    if (!isRangeAvailable) {
      setBookingError("Selected dates are not available.");
      return;
    }

    try {
      setBookingSubmitting(true);

      // ✅ bookings table should have:
      // marina_id, start_date, end_date, total_price, status
      const { error } = await supabase.from("bookings").insert({
        marina_id: marina.id,
        start_date: startDate,
        end_date: endDate,
        total_price: totalPrice,
        status: "pending",
      });

      if (error) {
        setBookingError(error.message || "Failed to create booking.");
      } else {
        setBookingSuccess("Booking request sent 🚀");
      }
    } catch (e) {
      setBookingError("Unexpected error while creating booking.");
    } finally {
      setBookingSubmitting(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!marina) {
    return <div className="py-20 text-center">Not found</div>;
  }

  return (
    <>
      <PageBanner
        title="Marinas"
        subtitle="Discover available marinas around the world"
        image="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">← Yacht / United Arab Emirates ({marina.location})</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <img src={marina.image} alt={marina.name} className="w-full h-[420px] object-cover rounded-2xl" />

            <h1 className="text-2xl font-semibold mt-6">
              {marina.name} – {marina.year}
            </h1>

            <p className="text-gray-500 mt-2">📍 {marina.location}</p>

            {/* DESCRIPTION */}
            <div className="mt-8">
              <h2 className="font-semibold text-lg mb-3">Description</h2>
              <p className="text-gray-600 leading-7">{marina.description}</p>
            </div>

            {/* INCLUDED */}
            <div className="mt-8">
              <h2 className="font-semibold text-lg mb-4">Included Service</h2>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <li>✔ With Captain</li>
                <li>✔ {marina.guests} Guests</li>
                <li>✔ {marina.bathrooms} Bathrooms</li>
                <li>✔ {marina.length} meters</li>
                <li>✔ {marina.bedrooms} Bedroom</li>
              </ul>
            </div>

            {/* 🔹 AVAILABILITY (still simple UI, but now tied to date range selection) */}
            <div className="mt-10">
              <h2 className="font-semibold text-lg mb-4">Availability</h2>

              {availabilityLoading && <p className="text-sm text-gray-500">Loading availability...</p>}

              {availabilityError && <p className="text-sm text-red-500">Failed to load availability</p>}

              {!availabilityLoading && Array.isArray(availability) && availability.length > 0 && (
                <>
                  <p className="text-sm text-gray-500 mb-3">Tip: Choose dates on the right. Below is a quick availability view.</p>

                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                    {availability.map((day) => (
                      <li
                        key={day.date}
                        className={`p-2 rounded text-center ${
                          day.is_available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {day.date}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Range status */}
              <div className="mt-4">
                {!startDate || !endDate ? (
                  <p className="text-sm text-gray-500">Select a date range to check availability.</p>
                ) : daysCount <= 0 ? (
                  <p className="text-sm text-red-500">End date must be the same or after start date.</p>
                ) : availabilityLoading ? (
                  <p className="text-sm text-gray-500">Checking selected range...</p>
                ) : isRangeAvailable ? (
                  <p className="text-sm text-green-700">Selected range is available ✅</p>
                ) : (
                  <p className="text-sm text-red-600">Selected range is not available ❌</p>
                )}
              </div>
            </div>

            {/* REVIEWS (STATIC) */}
            <div className="mt-12">
              <h2 className="font-semibold text-lg mb-4">A stories from past user</h2>

              <div className="grid sm:grid-cols-3 gap-6">
                {["Daniel", "Jenny", "Brooklyn"].map((name) => (
                  <div key={name} className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-600 mb-3">Amazing yacht, very clean and professional service.</p>
                    <div className="font-medium">{name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-12">
              <h2 className="font-semibold text-lg mb-4">Location</h2>

              <iframe
                title="map"
                className="w-full h-[300px] rounded-xl"
                src="https://maps.google.com/maps?q=Dubai%20Marina&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">
            <h3 className="font-semibold text-lg mb-4">The best solution for your yacht charter</h3>

            {/* FORM */}
            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Start date</div>
                <input
                  type="date"
                  className="w-full border p-2 rounded"
                  value={startDate}
                  onChange={(e) => {
                    setBookingError("");
                    setBookingSuccess("");
                    setStartDate(e.target.value);
                  }}
                />
              </div>

              <div className="space-y-1">
                <div className="text-xs text-gray-500">End date</div>
                <input
                  type="date"
                  className="w-full border p-2 rounded"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => {
                    setBookingError("");
                    setBookingSuccess("");
                    setEndDate(e.target.value);
                  }}
                />
              </div>

              <select className="w-full border p-2 rounded" defaultValue="hours">
                <option value="hours">Duration per hours</option>
              </select>

              {/* Inline status */}
              {bookingError && <div className="text-sm text-red-600">{bookingError}</div>}
              {bookingSuccess && <div className="text-sm text-green-700">{bookingSuccess}</div>}
            </div>

            <button
              onClick={handleBooking}
              disabled={!canBook}
              className={`w-full py-3 rounded-xl mt-6 transition ${
                canBook ? "bg-[#5FA8A5] text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {bookingSubmitting ? "Submitting..." : "Request a Booking"}
            </button>

            <div className="border-t mt-6 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Days</span>
                <span className="font-medium">{daysCount > 0 ? daysCount : "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold">${totalPrice}</span>
              </div>

              {!availabilityLoading && (startDate || endDate) && (
                <div className="text-xs text-gray-500">{isRangeAvailable ? "Dates available ✅" : "Dates not available ❌"}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
