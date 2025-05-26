import { upcomingScheduleData } from "../../data/scheduleData";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
const UpcomingSchudle = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 ml-3">The Upcoming Schedule</h3>
      <div className="flex  ">
        {upcomingScheduleData.map((daySchedule, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h4 className="text-sm font-medium text-gray-500 mb-3 ml-3 ">{daySchedule.day}</h4>
          <div className="grid grid-row-2 gap-3 ml-7 md:grid-cols-1">
            {daySchedule.appointments.map((appointment, inde) => (
              <SimpleAppointmentCard key={inde} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UpcomingSchudle;
