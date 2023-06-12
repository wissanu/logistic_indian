import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useIsAuthenticated } from "react-auth-kit";
const App = () => {
  const PrivateRoute = ({ path = "" }) => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    console.log(auth);
    console.log(path);
    if (path === "/" && auth)
      return <Navigate to="/admin/commercial_dashboard" />;
    else if (path === "*" && auth) return <AdminLayout />;
    else if (!auth) return <Navigate to="/auth/sign-in" />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute path="/"></PrivateRoute>} />
      <Route
        path="admin/*"
        element={
          <PrivateRoute path="*">
            <AdminLayout />
          </PrivateRoute>
        }
      />
      <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  );
};

export default App;
