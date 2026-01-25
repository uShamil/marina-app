import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

import MarinaCard from "../components/marinas/MarinaCard";
import SearchBar from "../components/home/SearchBar";
import Footer from "../components/layout/Footer";

export default function Marinas() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");

  const [marinas, setMarinas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarinas = async () => {
      let query = supabase.from("marinas").select("*");

      if (location) {
        query = query.ilike("location", `%${location}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error("SUPABASE ERROR:", error);
      } else {
        setMarinas(data);
      }

      setLoading(false);
    };

    fetchMarinas();
  }, [location]);

  async function fetchMarinas() {
    setLoading(true);

    let query = supabase.from("marinas").select("*");

    if (location) {
      query = query.ilike("location", `%${location}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      setMarinas([]);
    } else {
      setMarinas(data || []);
    }

    setLoading(false);
  }

  return (
    <>
      {/* Top search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <SearchBar />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar filters */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Filter</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Filter</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price</h3>
            <div className="text-xs text-gray-500 mb-2">0 – 3000$</div>
            <input type="range" className="w-full" />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Boat length</h3>
            <div className="text-xs text-gray-500 mb-2">100 – 3000m</div>
            <input type="range" className="w-full" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>With Captain</span>
            <input type="checkbox" />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Guests Number</h3>
            <div className="flex items-center gap-3">
              <button className="px-2 border rounded">-</button>
              <span>0</span>
              <button className="px-2 border rounded">+</button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Bedroom Number</h3>
            <div className="flex items-center gap-3">
              <button className="px-2 border rounded">-</button>
              <span>2</span>
              <button className="px-2 border rounded">+</button>
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
            <p className="text-gray-500">No marinas found for this location.</p>
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
