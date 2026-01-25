export default function MarinaSlideCard({ marina }) {
  return (
    <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
      <img src={marina.image} alt={marina.name} className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-sm font-semibold">{marina.name}</h3>
        <span className="text-xs">⭐ {marina.rating}</span>
      </div>
    </div>
  );
}
