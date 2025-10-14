import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContentPage from "./components/ContentPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

//For Routing like /scoreboard
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page", element: <ContentPage /> },
  { path: "*", element: <ErrorBoundary /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
