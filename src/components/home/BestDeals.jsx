import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import MarinaCard from "../marinas/MarinaCard";

export default function BestDeals() {
  const [marinas, setMarinas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestDeals = async () => {
      const { data, error } = await supabase.from("marinas").select("id, name, price, image").order("price", { ascending: true }).limit(6);

      if (error) {
        console.error("BestDeals error:", error);
      } else {
        if (data && data.length > 0) {
          setMarinas(data);
        } else {
          // Fallback if the database is empty so the UI doesn't look broken
          setMarinas([
            { id: 'mock-1', name: 'Luxury Catamaran Lagoon 42', price: 1200, image: 'https://images.unsplash.com/photo-1540946485063-a40da2fa8448?auto=format&fit=crop&w=800&q=80' },
            { id: 'mock-2', name: 'Sunseeker Manhattan 52', price: 950, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80' },
            { id: 'mock-3', name: 'Azimut 60 Flybridge', price: 1500, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=800&q=80' },
          ]);
        }
      }

      setLoading(false);
    };

    fetchBestDeals();
  }, []);

  return (
    <section className="py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[24px] font-semibold mb-[32px]">Best deal for you</h2>

        {loading ? (
          <p className="text-gray-500">Loading deals...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {marinas.map((marina) => (
              <MarinaCard key={marina.id} marina={marina} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
