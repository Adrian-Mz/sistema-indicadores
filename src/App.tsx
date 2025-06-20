import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import LoginPage from "./features/auth/page/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/AppLayout";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin", "user"]}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >{routes.map(({ path, element: Element }, idx) => (
              <Route
                key={idx}
                index={path === ""}
                path={path}
                element={<Element />}
              />
            ))}
          </Route>
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
