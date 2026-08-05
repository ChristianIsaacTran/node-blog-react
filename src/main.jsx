import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@christiantran/utility-css-reset";
import RootLayout from "./components/rootLayout/RootLayout.jsx";
import Homepage from "./components/homepage/Homepage.jsx";
import ErrorPage from "./components/errorpage/Errorpage.jsx";
import AccountCreationPage from "./components/accountCreationpage/AccountCreationPage.jsx";
import GuestPage from "./components/guestpage/GuestPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

// react router config
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "AccountCreation",
        Component: AccountCreationPage,
      },
      {
        path: "Guest",
        Component: GuestPage,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
