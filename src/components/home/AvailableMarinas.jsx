export default function AvailableMarinas() {
	return (
	  <section className="bg-gray-50 py-16">
		<div className="max-w-7xl mx-auto px-6">
		  <h2 className="text-2xl font-bold mb-8">Available marinas</h2>
  
		  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
			{[1, 2, 3, 4].map((item) => (
			  <div
				key={item}
				className="relative h-48 rounded-xl overflow-hidden"
			  >
				<img
				  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
				  className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/40 flex items-end p-4">
				  <span className="text-white font-semibold">
					Marina Name
				  </span>
				</div>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  }