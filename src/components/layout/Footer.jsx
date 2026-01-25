import footerBg from "../../assets/footer_bg.jpg"; 

export default function Footer() {
  return (
    <footer className="relative text-white min-h-[600px]">
      {/* Background image */}0
      <div className="absolute inset-0">
        <img src={footerBg} alt="footer background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#2f7f7b]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Sitemap */}
          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-white/70">
              <li>Quam</li>
              <li>Ridiculus</li>
              <li>Vestibulum</li>
              <li>Parturient Lorem</li>
              <li>Malesuada Fermentum</li>
              <li>Magna Malesuada</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-white/70">
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>Id maecenas</li>
              <li>Id orci</li>
              <li>Magna ultricies</li>
              <li>Quis risus</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>

            <div className="flex bg-white rounded-md overflow-hidden mb-4">
              <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none" />
              <button className="px-4 bg-[#1f6d69] text-white">→</button>
            </div>

            <p className="text-white/60 text-xs leading-relaxed">
              Scelerisque egestas sapien, integer sit. Diam eleifend nunc vel, scelerisque aliquam, sed blandit. Ullamcorper varius ante.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/70">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-semibold">⚓ logo</div>

          {/* Links */}
          <div className="flex gap-6">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-white text-sm">
            <span>in</span>
            <span>f</span>
            <span>◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
