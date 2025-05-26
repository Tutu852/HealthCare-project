import CalendarView from "../CalenderView";

const RightPanel = () => {
  return (
    <div className="w-full overflow-y-auto px-2">
      {/* // section-1 — hidden on mobile */}
      <div className="hidden sm:flex flex-col sm:flex-row ml-80 items-center gap-4 p-2">
        <div className="w-9 h-9">
          <img
            src="../assets/images.jpg"
            alt="avatar"
            className="w-10 h-10 object-cover rounded-md bg-cyan-400"
          />
        </div>
        <button className="w-10 h-10 bg-blue-950 hover:bg-blue-200 text-white rounded-md text-lg font-bold">
          +
        </button>
      </div>

      {/* // section-2 */}
      <CalendarView />
    </div>
  );
};

export default RightPanel;
