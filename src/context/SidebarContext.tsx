// context/sidebar-context.ts
import { createContext, useContext } from "react";

export const SidebarContext = createContext<{
  sidebarUnfoldable: boolean;
  setSidebarUnfoldable: (val: boolean) => void;
}>({
  sidebarUnfoldable: true,
  setSidebarUnfoldable: () => {},
});

export const useSidebar = () => useContext(SidebarContext);
