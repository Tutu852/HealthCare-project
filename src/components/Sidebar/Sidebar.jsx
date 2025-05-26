import { navigationData } from "../../data/navigationData";
import HighlightText from "../common/HighlightText";
import { HiX } from "react-icons/hi";

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-full md:w-[260px] h-full p-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold whitespace-nowrap text-center ml-5">
          <HighlightText text={"Health"} />
          <span>care.</span>
        </div>
        {onClose && (
          <button
            className="md:hidden text-gray-600 hover:text-black"
            onClick={onClose}
          >
            <HiX size={24} />
          </button>
        )}
      </div>

      <div className="mt-7 ml-2">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide pl-4">
          General
        </h3>
        <nav>
          {navigationData.slice(0, 5).map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                item.isActive
                  ? "text-black"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <item.icon className="shrink-0" size={18} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-5 ml-2">
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide  pl-4">
          Tools
        </h3>
        <nav className="flex flex-col gap-1">
          {navigationData.slice(5).map((item, index) => (
            <a
              key={index + 5}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 font-medium text-sm hover:bg-gray-100 hover:text-gray-900 transition-all ${
                item.label === "Setting" ? "mt-5" : ""
              }`}
            >
              <item.icon className="flex-shrink-0" size={18} />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
