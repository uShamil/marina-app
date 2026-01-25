import MarinaCard from "./MarinaCard";

export default function MarinaList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <MarinaCard key={i} />
      ))}
    </div>
  );
}