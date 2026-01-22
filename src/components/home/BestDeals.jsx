const deals = [1, 2, 3, 4];

export default function BestDeals() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Best deal for you</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
              alt=""
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold">Marina Name</h3>
              <p className="text-sm text-gray-500 mt-1">
                From €120 / night
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}