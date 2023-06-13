import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryclient = new QueryClient();

root.render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={true}
  >
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider>
);
