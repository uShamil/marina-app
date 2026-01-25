import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MarinaSlideCard from "../marinas/MarinaSlideCard";
import "swiper/css";
import "swiper/css/navigation";

import { marinas } from "../../data/marinas";

export default function AvailableMarinas() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-semibold leading-tight">
            Available <br /> Marinas
          </h2>

          <p className="text-sm text-gray-500 mt-4">
            start your journey from any point <br /> in Dubai
          </p>

          <button className="mt-6 text-sm font-medium flex items-center gap-2">Check All →</button>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 relative overflow-hidden">
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
                <MarinaSlideCard marina={marina} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
