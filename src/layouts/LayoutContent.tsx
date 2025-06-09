// layout/LayoutContent.tsx
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";

const LayoutContent = () => {
  return (
    <div className="flex min-h-screen overflow-hidden relative">
      <AppSidebar />
      <Backdrop />
      <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
        <AppHeader />
        <main className="flex-1 transition-all duration-300 ease-in-out p-4 md:p-6 bg-gray-100">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutContent;