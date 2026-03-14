import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pelra_logo.png";
import { useAuth } from "../../hooks/useAuth";
import { supabase } from "../../lib/supabase";

const HEADER_HEIGHT = 80;

export default function Header() {
  const [isScrolled] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-white/55 py-5">
        <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
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
          <div className="flex items-center gap-4 text-sm text-gray-700">
            {user ? (
              <>
                <Link to="/dashboard" className="hidden sm:inline text-gray-700 hover:text-blue-600 font-medium">
                  {user.user_metadata?.full_name || user.email}
                </Link>
                <button
                  onClick={handleLogout}
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="font-medium hover:text-blue-600">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1.5 bg-[#5FA8A5] text-white rounded-md hover:bg-[#4d8f8d] transition"
                >
                  Sign up
                </Link>
              </>
            )}
            <span>Help</span>
            <span>🌐 AR</span>
          </div>
        </div>
      </header>
    </>
  );
}
