import React, { useState } from "react";
import Dashboard from "./components/DashboardMainContent/DashboardMainContent";
import RightPanel from "./components/DashboardMainContent/DashboardOverview/RightPanel";
import Sidebar from "./components/Sidebar/Sidebar";
import { HiMenu } from "react-icons/hi";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#bdd5e7] relative overflow-hidden">
      {/* Background White Card */}
      <div className="absolute inset-4 rounded-3xl bg-white shadow-xl z-0" />

      {/* Mobile Menu Button */}
      <div className="absolute top-5 left-5 z-20 md:hidden">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-blue-900 bg-[#d6e5f1]/50 p-2 rounded-full shadow-md"
        >
          <HiMenu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#d6e5f1]/50 shadow-xl z-30 transition-transform duration-300 md:hidden">
          <Sidebar onClose={() => setShowSidebar(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-2 md:p-4 lg:p-6 z-10 w-full overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Sidebar (Desktop) */}
          <div className="hidden md:block lg:w-[20%] bg-[#d6e5f1]/50 backdrop-blur-md rounded-l-xl lg:rounded-l-xl">
            <Sidebar />
          </div>

          {/* Dashboard */}
          <div className="w-full lg:w-[40%] backdrop-blur-md rounded-xl">
            <Dashboard />
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[40%] bg-[#cde0ed]/50 backdrop-blur-md rounded-r-xl lg:rounded-r-xl">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
