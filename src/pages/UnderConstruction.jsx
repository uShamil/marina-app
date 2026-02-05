import logo from "../assets/pelra_logo.png";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#071A2B] to-[#0B2D3F] px-6">
      <div className="w-full max-w-[760px] text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={logo} alt="Pelra logo" className="h-34 w-auto object-contain" />
        </div>

        {/* Title */}
        <h1
          className="
            text-white
            text-5xl md:text-6xl
            font-semibold
            tracking-wide
            animate-slide-up
          "
        >
          PELRA
        </h1>

        {/* Description */}
        <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed animate-fade-in-delay">
          Pelra is a next-generation marina and yacht reservation platform.
          <br className="hidden sm:block" />
          We are currently building a seamless experience for yacht owners and marina operators.
        </p>

        {/* Contact */}
        <p className="mt-10 text-white/60 text-sm animate-fade-in-delay-2">
          For inquiries, please contact us at{" "}
          <a href="mailto:support@perla.app" className="underline underline-offset-4 hover:text-white transition">
            support@perla.app
          </a>
        </p>

        {/* Footer */}
        <div className="mt-14 space-y-2">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Pelra. All rights reserved.</p>

          <p className="text-white/40 text-xs">
            Design by{" "}
            <a
              href="https://ugurkaya.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-white transition"
            >
              Черкесский Призрачный Писатель.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
