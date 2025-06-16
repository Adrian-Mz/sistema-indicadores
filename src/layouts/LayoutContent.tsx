import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";

const LayoutContent = () => {
  return (
    <div className="d-flex min-vh-100">
      <AppSidebar />
      <Backdrop />
      <div className="flex-grow-1 d-flex flex-column">
        <AppHeader />
        <main
          className="flex-grow-1 overflow-auto bg-gray-100 p-4"
          style={{ minHeight: "0" }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutContent;
