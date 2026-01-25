import Header from "../layout/Header";
import SearchBar from "./SearchBar";
import bannerImg from "../../assets/b1.jpg";
export default function Hero() {
  return (
    <section className="relative h-[820px] w-full overflow-hidden">
      {/* Background */}

      <img src={bannerImg} className="absolute inset-0 w-full h-full object-cover object-center" />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 h-full">
        {/* Text */}
        <div className="pt-[160px] max-w-[520px]">
          <h1 className="leading-tight">
            <span className="block text-[42px] font-medium text-black">Discover Dubai</span>
            <span className="block text-[46px] font-bold text-white mt-1">In New Way</span>
          </h1>

          <p className="mt-6 text-[14px] leading-[22px] text-white/90">
            More than 40,000 private yacht rentals and bareboat charters near me and worldwide for your next boating trip
          </p>
        </div>

        {/* Search */}
        <div className="absolute left-1/2 bottom-[90px] -translate-x-1/2 w-full px-6">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
