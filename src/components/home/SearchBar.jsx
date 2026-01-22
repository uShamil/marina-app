export default function SearchBar() {
	return (
	  <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl">
		<input
		  placeholder="Location"
		  className="border rounded-lg px-4 py-3"
		/>
		<input
		  type="date"
		  className="border rounded-lg px-4 py-3"
		/>
		<input
		  placeholder="Boat length (m)"
		  className="border rounded-lg px-4 py-3"
		/>
		<button className="bg-teal-600 text-white rounded-lg px-6 py-3 font-medium">
		  Find Marina
		</button>
	  </div>
	);
  }