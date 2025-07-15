// context/SidebarProvider.tsx
import { useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarUnfoldable, setSidebarUnfoldable] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarUnfoldable, setSidebarUnfoldable }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
