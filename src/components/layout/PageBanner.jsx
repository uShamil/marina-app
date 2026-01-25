import { useLocation } from "react-router-dom";

export default function PageBanner({ title, subtitle, image }) {
  return (
    <div className="relative h-[220px] w-full">
      {/* Background image */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[1180px] mx-auto h-full px-6 flex flex-col justify-center text-white">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle && <p className="text-sm text-white/80 mt-2">{subtitle}</p>}
      </div>
    </div>
  );
}
