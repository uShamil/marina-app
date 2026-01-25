import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("Dubai");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) params.append("location", location);
    if (date) params.append("date", date);
    if (duration) params.append("duration", duration);

    navigate(`/marinas?${params.toString()}`);
  };

  return (
    <div className="mx-auto max-w-[1080px] bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-[28px] py-[22px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] items-center">
        {/* Location */}
        <div>
          <label className="text-[12px] text-gray-500 font-medium">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-[6px] w-full text-[14px] bg-transparent focus:outline-none"
          >
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Miami</option>
            <option>Monaco</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="text-[12px] text-gray-500 font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-[6px] w-full text-[14px] bg-transparent focus:outline-none"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="text-[12px] text-gray-500 font-medium">Duration per hours</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-[6px] w-full text-[14px] bg-transparent focus:outline-none"
          >
            <option value="">Select duration</option>
            <option value="2">2 Hours</option>
            <option value="4">4 Hours</option>
            <option value="6">6 Hours</option>
            <option value="8">8 Hours</option>
          </select>
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          className="h-[52px] rounded-[10px] bg-[#5FA8A5] text-white text-[14px] font-medium hover:opacity-90 transition"
        >
          Find My a Boat
        </button>
      </div>
    </div>
  );
}
