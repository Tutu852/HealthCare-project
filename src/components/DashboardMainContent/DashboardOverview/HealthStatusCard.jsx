import React from 'react'
import { healthStatusData } from '../../../data/healthData'
const HealthStatusCard = () => {
    const typeToColor = {
    healthy: "bg-green-400 w-[50%]",
    warning: "bg-red-300 w-[30%]",
    critical: "bg-red-500 w-[70%]",
  };

  return (
    <>
      <div className=" lg:w-[40%]  space-y-4">
        {healthStatusData.map((item, index) => (
          <div
            key={index}
            className="bg-[#d6e5f1]/50  shadow-md rounded-xl space-y-2 space-x-2"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">{item.emoji}</span>
              <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
            </div>
            <p className="text-xs text-gray-500">Date: {item.date}</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2 rounded-full ${typeToColor[item.type] || "bg-gray-300 w-[40%]"}`}
              ></div>
            </div>
          </div>
        ))}
        <span className="text-center block ml-20 text-gray-400 text-xs font-semibold">Details</span>
      </div>
    </>
  )
}

export default HealthStatusCard
