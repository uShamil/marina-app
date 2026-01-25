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
        setMarinas(data);
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
