import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    title: "The Amazing Difference a Year of Travelling",
    date: "July 27, 2021",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Travel far enough, you meet yourself.",
    date: "July 27, 2021",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "How to Save Money While Visiting Africa",
    date: "July 27, 2021",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  },
  {
    id: 4,
    title: "Reflections on 5 Months of Travel: Time to Hang",
    date: "July 27, 2021",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad89",
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
