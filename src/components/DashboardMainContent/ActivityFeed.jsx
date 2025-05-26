import { activityData } from "../../data/activityData";

const ActivityFeed = () => {
  return (
    <div className="bg-[#d6e5f1]/50 rounded-2xl shadow p-2 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-semibold text-gray-800">Activity</div>
        <div className="text-xs text-gray-500">
          3 appointments on this week
        </div>
      </div>

      <div className="flex justify-between items-end h-20 w-full">
        {/* // Render the activity bars for each day */}
        {activityData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 min-w-[30px]"
          >
            <div className="flex gap-[8px] h-20 items-end justify-center">
                {/* getting the bars for each day  */}
              {data.bars.map((barHeight, barIndex) => {
                // Determine if the bar should be colored based on its index
                const isColored = barIndex === 0 || barIndex === 2; 
                // Calculate the height of the bar, 
                return (
                  <div
                    key={barIndex}
                    className={`w-[3px] md:w-[4px] rounded-t ${
                      isColored
                        ? barIndex % 2 === 0
                          ? "bg-[#70C4CF]"
                          : "bg-[#9178cb]"
                        : "bg-[#8799a9]"
                    }`}
                    style={{ height: `${barHeight}px` }}
                  />
                );
              })}
            </div>
            <div className="text-[10px] text-gray-500 mt-1">{data.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
