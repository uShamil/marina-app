const items = [1,2,3,4,5,6];

export default function BestDeals() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10">Best deal for you</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(i => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="font-semibold">Marina Name</h3>
              <p className="text-sm text-gray-500 mt-1">From €120 / night</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}