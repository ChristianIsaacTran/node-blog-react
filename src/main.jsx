import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@christiantran/utility-css-reset";
import App from "./App.jsx";
import ErrorPage from "../components/errorpage/Errorpage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router";

// react router config
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
