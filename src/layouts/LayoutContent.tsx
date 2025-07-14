import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import { useSidebar } from "../context/SidebarContext";

const LayoutContent = () => {

  const { sidebarUnfoldable } = useSidebar();
  const sidebarWidth = sidebarUnfoldable ? 272 : 62;

  return (
    <div className="min-vh-100">
      <AppSidebar />
      <div
        className="wrapper"
        style={{
          marginLeft: `${sidebarWidth}px`,
          transition: "margin-left 0.3s ease",
        }}
      >
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
