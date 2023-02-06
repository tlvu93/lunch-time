import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page";
import { AuthProvider } from "./context/auth-context";
import LandingPage from "./pages/landing-page";
import AppLayout from "./layout/app-layout";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </AuthProvider>
  </React.StrictMode>
);
