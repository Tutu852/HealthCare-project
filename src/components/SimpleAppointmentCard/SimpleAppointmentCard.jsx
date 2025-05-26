import React from "react";

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-[#c5bbd4] rounded-xl p-4 w-[200px] relative hover:border-[#d1d5ff] transition-all duration-200">
      {/* Emoji in top right */}
      <span className="absolute top-2 right-3 text-lg ml-6">
        {appointment.emoji}
      </span>

      {/* Title and Time */}
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-gray-800 mb-1">
          {appointment.title}
        </span>
        <div className="text-[10px] text-gray-500 font-medium">
          {appointment.time}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
