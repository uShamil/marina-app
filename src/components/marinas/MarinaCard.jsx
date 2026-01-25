import { Link } from "react-router-dom";

export default function MarinaCard({ marina }) {
  return (
    <Link to={`/marinas/${marina.id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
        <img src={marina.image} alt={marina.name} className="h-[180px] w-full object-cover" />

        <div className="p-4 text-sm space-y-1">
          <h3 className="font-semibold">
            {marina.name} ({marina.year})
          </h3>

          <p className="text-gray-500">📍 {marina.location}</p>

          <p className="font-medium">From ${marina.price} per day</p>
        </div>
      </div>
    </Link>
  );
}
