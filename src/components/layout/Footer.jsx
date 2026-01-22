export default function Footer() {
	return (
	  <footer className="relative mt-24">
		{/* Background image */}
		<div className="absolute inset-0">
		  <img
			src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
			className="w-full h-full object-cover"
		  />
		  <div className="absolute inset-0 bg-teal-900/80" />
		</div>
  
		{/* Content */}
		<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
		  <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
			{/* Logo */}
			<div>
			  <h3 className="text-2xl font-bold">marina</h3>
			  <p className="text-sm text-white/70 mt-4">
				Discover and reserve marinas easily around the world.
			  </p>
			</div>
  
			{/* Group */}
			<div>
			  <h4 className="font-semibold mb-4">Group</h4>
			  <ul className="space-y-2 text-sm text-white/70">
				<li>About</li>
				<li>Marinas</li>
				<li>Yachts</li>
				<li>Blog</li>
			  </ul>
			</div>
  
			{/* Help */}
			<div>
			  <h4 className="font-semibold mb-4">Help</h4>
			  <ul className="space-y-2 text-sm text-white/70">
				<li>Support</li>
				<li>FAQs</li>
				<li>Contact</li>
				<li>Privacy Policy</li>
			  </ul>
			</div>
  
			{/* Subscribe */}
			<div>
			  <h4 className="font-semibold mb-4">Subscribe</h4>
			  <p className="text-sm text-white/70 mb-4">
				Get latest marina updates & offers
			  </p>
			  <div className="flex">
				<input
				  placeholder="Your email"
				  className="px-4 py-2 rounded-l-lg text-black w-full"
				/>
				<button className="bg-teal-500 px-4 py-2 rounded-r-lg font-medium">
				  →
				</button>
			  </div>
			</div>
		  </div>
  
		  {/* Bottom */}
		  <div className="mt-16 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
			<span>© 2026 marina. All rights reserved.</span>
			<div className="flex gap-4 mt-4 md:mt-0">
			  <span>Terms</span>
			  <span>Privacy</span>
			  <span>Cookies</span>
			</div>
		  </div>
		</div>
	  </footer>
	);
  }