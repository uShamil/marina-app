export default function SearchBar() {
	return (
	  <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4">
		<input
		  type="text"
		  placeholder="Location"
		  className="border rounded-lg px-4 py-3 flex-1"
		/>
  
		<input
		  type="date"
		  className="border rounded-lg px-4 py-3"
		/>
  
		<input
		  type="number"
		  placeholder="Boat length (m)"
		  className="border rounded-lg px-4 py-3 w-full md:w-48"
		/>
  
		<button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium">
		  Find Marina
		</button>
	  </div>
	);
  }