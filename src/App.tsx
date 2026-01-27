import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/page/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/AppLayout";
import { routes } from "./routes/AppRoutes";
import { RecoverPasswordForm } from "./features/auth/components/RecoverPasswordForm";
import ResetPasswordPage from "./features/auth/page/ResetPasswordPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/recover-password" element={<RecoverPasswordForm />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
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
    </BrowserRouter>
  );
}

export default App;
