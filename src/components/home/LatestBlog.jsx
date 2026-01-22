export default function LatestBlog() {
	return (
	  <section className="max-w-7xl mx-auto px-6 py-16">
		<h2 className="text-2xl font-bold mb-8">
		  Get update with latest blog
		</h2>
  
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
		  {[1, 2, 3].map((item) => (
			<div key={item} className="bg-white rounded-xl shadow">
			  <img
				src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
				className="h-40 w-full object-cover rounded-t-xl"
			  />
  
			  <div className="p-4">
				<h3 className="font-semibold">
				  Amazing marinas you should know
				</h3>
				<p className="text-sm text-gray-500 mt-2">
				  Jan 12, 2026
				</p>
			  </div>
			</div>
		  ))}
		</div>
	  </section>
	);
  }