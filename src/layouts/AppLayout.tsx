// layout/AppLayout.tsx
import { SidebarProvider } from "../context/SidebarContext";
import LayoutContent from "./LayoutContent";

const AppLayout = () => (
  <SidebarProvider>
    <LayoutContent />
  </SidebarProvider>
);

export default AppLayout;
