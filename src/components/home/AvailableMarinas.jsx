import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MarinaSlideCard from "../marinas/MarinaSlideCard";
import "swiper/css";
import "swiper/css/navigation";
import { supabase } from "../../lib/supabase";

export default function AvailableMarinas() {
  const [marinas, setMarinas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarinas = async () => {
      // Fetch some marinas to show in the carousel
      const { data, error } = await supabase.from("marinas").select("*").limit(8);

      if (error) {
        console.error("AvailableMarinas error:", error);
      } else {
        setMarinas(data);
      }
      setLoading(false);
    };

    fetchMarinas();
  }, []);

  return (
    <section className="max-w-[1180px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-semibold leading-tight">
            Available <br /> Marinas
          </h2>

          <p className="text-sm text-gray-500 mt-4">
            start your journey from any point <br /> in the world
          </p>

          <Link to="/marinas" className="mt-6 text-sm font-medium flex items-center gap-2 hover:text-[#5FA8A5] transition">
            Check All &rarr;
          </Link>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 relative overflow-hidden">
          {loading ? (
            <div className="py-10 text-gray-400">Loading marinas...</div>
          ) : (
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {marinas.map((marina) => (
                <SwiperSlide key={marina.id} className="!w-[260px]">
                  <Link to={`/marinas/${marina.id}`}>
                    <MarinaSlideCard marina={marina} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
