import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
        <h1 className="text-white text-5xl font-bold max-w-2xl">
          Discover marinas <br /> in a new way
        </h1>

        <p className="text-white/90 mt-4 max-w-xl">
          Find available marinas, compare prices and reserve your spot easily.
        </p>

        <div className="mt-12">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}