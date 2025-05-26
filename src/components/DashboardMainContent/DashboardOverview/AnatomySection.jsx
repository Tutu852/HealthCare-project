import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import HealthStatusCard from "./HealthStatusCard";

const AnatomySection = () => {
  
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 px-4">
      {/* Anatomy Image */}
      <div className=" lg:w-[50%] bg-[#d6e5f1]/50 h-auto rounded-2xl relative">
        <div className="w-[50%] mx-auto overflow-hidden">
          <Zoom>
            <img
              src="/src/assets/human-transparent.png.png"
              alt="Human Anatomy"
              className="h-auto w-full"
            />
          </Zoom>
        </div>

        <HiOutlineMagnifyingGlassPlus
          size={24}
          className="text-blue-950 absolute top-2 right-2 cursor-pointer"
        />

        <div className="absolute top-[60px] -right-[30px] md:-right-[10px] bg-blue-900 text-white px-3.5 py-2 rounded-md shadow-md flex items-center gap-2 text-xs font-semibold z-20 md:text-[0.625rem] md:px-2.5 md:py-1.5">
          <span>❤️Healthy Heart</span>
        </div>
        <div className="absolute top-[160px] left-[2px] bg-[#00FFF0] text-blue-900 px-3 py-2 rounded-md shadow-md flex items-center gap-2 text-xs font-semibold z-20 md:text-[0.625rem]">
          <span>🦵Healthy Leg</span>
        </div>
      </div>

      {/* Health Cards */}
      <HealthStatusCard/>
    </div>
  );
};

export default AnatomySection;
