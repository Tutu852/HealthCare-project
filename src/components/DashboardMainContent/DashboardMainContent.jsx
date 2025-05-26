import { IoIosArrowDown } from "react-icons/io";
import AnatomySection from "./DashboardOverview/AnatomySection";
import ActivityFeed from "./ActivityFeed";

const Dashboard = () => {
  return (
    <div className=" space-y-6">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-full px-4 max-w-xl">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 ml-2 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="w-4/5 pl-12 pr-12 py-2 rounded-full bg-[#f0f4f8] text-sm focus:outline-none"
          />
          <button className="w-10 h-10 ml-4 mt-2 bg-[#f0f4f8] hover:bg-blue-200 text-white rounded-md text-lg font-bold">
          🔔
        </button>
        </div>
      </div>

      <div className="flex justify-between  px-4">
        <div className="font-bold text-blue-950 text-2xl">DashBoard</div>
        <div className="flex items-center text-gray-400 text-xs font-semibold uppercase tracking-wide">
          <span>This Week</span>
          <span className="ml-1">
            <IoIosArrowDown />
          </span>
        </div>
      </div>

      <AnatomySection />
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;