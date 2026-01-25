import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = () => {
    const location = "Dubai"; // şimdilik sabit
    navigate(`/marinas?location=${location}`);
  };

  return (
    <div className="mx-auto max-w-[1080px] bg-white rounded-[16px] shadow px-[28px] py-[22px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px] items-center">
        <div>
          <label className="text-[12px] text-gray-500 font-medium">Location</label>
          <div className="mt-[6px] text-[14px]">Dubai</div>
        </div>

        <div>
          <label className="text-[12px] text-gray-500 font-medium">Date</label>
          <div className="mt-[6px] text-[14px] text-gray-400">Add your dates</div>
        </div>

        <div>
          <label className="text-[12px] text-gray-500 font-medium">Duration per hours</label>
          <div className="mt-[6px] text-[14px] text-gray-400">Duration per hours</div>
        </div>

        <button onClick={handleSearch} className="h-[52px] rounded-[10px] bg-[#5FA8A5] text-white text-[14px] font-medium">
          Find My a Boat
        </button>
      </div>
    </div>
  );
}
