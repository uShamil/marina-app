import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

import MarinaCard from "../components/marinas/MarinaCard";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";

export default function Marinas() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const duration = searchParams.get("duration");

  const [marinas, setMarinas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [maxPrice, setMaxPrice] = useState(3000);
  const [guests, setGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [withCaptain, setWithCaptain] = useState(false);

  useEffect(() => {
    const fetchMarinas = async () => {
      setLoading(true);
      let query = supabase.from("marinas").select("*");

      if (location) {
        query = query.ilike("location", `%${location}%`);
      }

      // Apply Filters
      query = query.lte("price", maxPrice);
      
      if (guests > 0) {
        query = query.gte("guests", guests);
      }
      if (bedrooms > 0) {
        query = query.gte("bedrooms", bedrooms);
      }
      
      // If we had a captain boolean column, we could filter it here.
      // if (withCaptain) query = query.eq("with_captain", true);

      const { data, error } = await query;

      if (error) {
        console.error("SUPABASE ERROR:", error);
      } else {
        setMarinas(data);
      }

      setLoading(false);
    };

    fetchMarinas();
  }, [location, duration, maxPrice, guests, bedrooms, withCaptain]);

  return (
    <>
      <PageBanner
        title="Marinas"
        subtitle="Discover available marinas around the world"
        image="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar filters */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-semibold mb-3">Max Price</h3>
            <div className="text-xs text-gray-500 mb-2">0 – {maxPrice}$</div>
            <input 
              type="range" 
              min="0" 
              max="10000" 
              step="100" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))} 
              className="w-full" 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>With Captain</span>
            <input 
              type="checkbox" 
              checked={withCaptain} 
              onChange={(e) => setWithCaptain(e.target.checked)} 
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Min Guests Number</h3>
            <div className="flex items-center gap-3">
              <button onClick={() => setGuests(Math.max(0, guests - 1))} className="px-2 border rounded hover:bg-gray-100">-</button>
              <span>{guests}</span>
              <button onClick={() => setGuests(guests + 1)} className="px-2 border rounded hover:bg-gray-100">+</button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Min Bedroom Number</h3>
            <div className="flex items-center gap-3">
              <button onClick={() => setBedrooms(Math.max(0, bedrooms - 1))} className="px-2 border rounded hover:bg-gray-100">-</button>
              <span>{bedrooms}</span>
              <button onClick={() => setBedrooms(bedrooms + 1)} className="px-2 border rounded hover:bg-gray-100">+</button>
            </div>
          </div>
        </aside>

        {/* Marina list */}
        <section className="lg:col-span-3">
          {location && (
            <p className="text-sm text-gray-500 mb-6">
              Showing results for <strong>{location}</strong>
            </p>
          )}

          {loading ? (
            <div className="py-20 text-center text-gray-500">Loading marinas...</div>
          ) : marinas.length === 0 ? (
            <p className="text-gray-500">No marinas found matching your criteria.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {marinas.map((marina) => (
                <MarinaCard key={marina.id} marina={marina} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
}
