// layout/Backdrop.tsx
import { useSidebar } from "../context/SidebarContext";

const Backdrop = () => {
  const { isMobile, isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobile || !isMobileOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={toggleMobileSidebar}
    />
  );
};

export default Backdrop;
