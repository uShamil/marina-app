import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pelra_logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "fixed top-0 bg-white shadow-md" : "absolute top-0 backdrop-blur-sm bg-white/20"}`}
      >
        <div className="max-w-[1180px] mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-gray-800">
            <img src={logo} className={`object-contain transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`} />
            Pelra
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-800">
            <Link className="font-medium" to="/">
              Home
            </Link>
            <Link to="/marinas">Marinas</Link>
            <span>Offers</span>
            <span>Gallery</span>
            <span>Blog</span>
            <span>About Us</span>
          </nav>

          {/* Right */}
          <div className="flex gap-4 text-sm text-gray-700">
            <span>Log in</span>
            <span>Help</span>
            <span>🌐 AR</span>
          </div>
        </div>
      </header>

      {/* Spacer (fixed header content jump olmasın diye) */}
      {isScrolled && <div className="h-[80px]" />}
    </>
  );
}
