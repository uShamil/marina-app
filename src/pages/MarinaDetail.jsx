import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import PageBanner from "../components/layout/PageBanner";

export default function MarinaDetail() {
  const { id } = useParams();
  const [marina, setMarina] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarina = async () => {
      const { data, error } = await supabase.from("marinas").select("*").eq("id", id).single();

      if (!error) setMarina(data);
      setLoading(false);
    };

    fetchMarina();
  }, [id]);

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

        {/* TOP */}
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

            {/* LOCATION (STATIC MAP) */}
            <div className="mt-12">
              <h2 className="font-semibold text-lg mb-4">Location</h2>

              <iframe
                title="map"
                className="w-full h-[300px] rounded-xl"
                src="https://maps.google.com/maps?q=Dubai%20Marina&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>

            {/* SIMILAR (STATIC) */}
            <div className="mt-12">
              <h2 className="font-semibold text-lg mb-4">Similar yachts</h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm">
                    <img src={marina.image} className="h-[120px] w-full object-cover rounded-t-xl" />
                    <div className="p-3 text-sm">From ${marina.price} / day</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">
            <h3 className="font-semibold text-lg mb-4">The best solution for your yacht charter</h3>

            {/* STATIC FORM */}
            <div className="space-y-4 text-sm">
              <input className="w-full border p-2 rounded" placeholder="Start date" />
              <input className="w-full border p-2 rounded" placeholder="End date" />
              <select className="w-full border p-2 rounded">
                <option>Duration per hours</option>
              </select>
            </div>

            <button className="w-full bg-[#5FA8A5] text-white py-3 rounded-xl mt-6">Request a Booking</button>

            <div className="border-t mt-6 pt-4 flex justify-between">
              <span>Total</span>
              <span className="font-semibold">${marina.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
