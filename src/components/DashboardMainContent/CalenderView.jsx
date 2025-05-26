import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { calendarData, appointmentCards } from "../../data/calendarData";
import UpcomingSchudle from "./UpcomingSchudle"

const CalendarView = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Header Row */}
      <div className="flex justify-between items-center px-2 flex-wrap gap-4">
        <div className="flex items-center gap-4 font-semibold text-gray-800">
          <span className="text-sm">October 2021</span>
          <IoMdArrowRoundBack
            size={16}
            className="cursor-pointer ml-70 text-black hover:text-gray-600"
          />
          <IoMdArrowRoundForward
            size={16}
            className="cursor-pointer text-black hover:text-gray-600"
          />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className=" rounded-2xl   overflow-x-auto">
        <div className="grid grid-cols-7 gap-2 min-w-[400px]">
          {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
            <div
              key={day}
              className="text-center text-xs text-gray-500 font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 min-w-[400px]">
          {calendarData.map((day, index) => (
            <div
              key={index}
              className="text-center  rounded-lg transition-colors"
            >
              <div
                className={`text-lg font-semibold mb-3 ${
                  day.isToday ? "text-blue-900" : "text-gray-800"
                }`}
              >
                {day.day}
              </div>
              <div className="flex flex-col gap-1.5">
                {day.appointments.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className={`text-[10px] px-1 py- rounded font-medium ${
                      day.isToday && timeIndex === 1
                        ? "bg-blue-900 text-white"
                        : day.isToday
                        ? "bg-purple-200 text-blue-900"
                        : " text-gray-600"
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Cards */}
      <div className="grid grid-cols-1 pl-3 pr-3 sm:grid-cols-2 gap-4 mb-2">
        {appointmentCards.map((card, index) => (
          <div
            key={index}
            className={` rounded-3xl  ${
              card.type === "primary"
                ? "bg-blue-900"
                : "bg-[#c5bbd4] text-blue-900"
            } ${
              card.title.includes("Physiotherapy Appointment") ? " text-black " : " text-white "
            }`}
          >
            <div className="flex items-center gap-3 mb-3 ml-2">
              <span className="w-6 h-2 rounded-md flex items-center justify-center">
                {card.emoji}
              </span>

              <span className="text-sm font-semibold leading-tight ml-2">
                {card.title}
              </span>
            </div>
            <div className="text-xs mb-1.5 font-medium opacity-90 ml-2">
              {card.time}
            </div>
            <div className="text-xs opacity-80 ml-4">{card.doctor}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Schedule */}
      <UpcomingSchudle />
    </div>
  );
};

export default CalendarView;
