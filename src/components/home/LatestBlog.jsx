import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    title: "10 Tips for Your First Yacht Charter Experience",
    date: "August 12, 2023",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Top 5 Marinas to Visit in the Mediterranean",
    date: "September 05, 2023",
    image: "https://images.unsplash.com/photo-1540946485063-a40da2fa8448?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Understanding Boat Sizes: Which Catamaran is Right For You?",
    date: "October 20, 2023",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Essential Gear Every Skipper Should Have on Board",
    date: "November 14, 2023",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  },
];

export default function LatestBlog() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-12">
        Get update with <span className="text-[#5FA8A5]">latest blog</span>
      </h2>

      {/* Swiper wrapper */}
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!overflow-hidden pb-12"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
  function BlogCard({ blog }) {
    return (
      <div className="w-full">
        <div className="rounded-2xl overflow-hidden mb-4">
          <img src={blog.image} alt={blog.title} className="w-full h-[200px] object-cover" />
        </div>

        <h3 className="text-sm font-medium leading-snug mb-2">{blog.title}</h3>

        <p className="text-xs text-gray-400">{blog.date}</p>
      </div>
    );
  }
}
