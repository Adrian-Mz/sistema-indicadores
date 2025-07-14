// layout/AppLayout.tsx
import SidebarProvider from "../context/SidebarProvider";
import LayoutContent from "./LayoutContent";

const AppLayout = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export default AppLayout;
