export default function MarinaFilters() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Filter</h3>
        <div className="space-y-3 text-sm text-gray-600">
          {[1, 2, 3, 4].map((i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" />
              Filter
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Price</h4>
        <input type="range" className="w-full" />
        <p className="text-xs text-gray-500 mt-1">0 – 3000$</p>
      </div>

      <div>
        <h4 className="font-medium mb-2">Boat length</h4>
        <input type="range" className="w-full" />
        <p className="text-xs text-gray-500 mt-1">10 – 300m</p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span>With Captain</span>
        <input type="checkbox" />
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span>Guests Number</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span>Bedroom Number</span>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}
