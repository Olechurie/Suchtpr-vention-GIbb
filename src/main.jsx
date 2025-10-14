import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContentPage from "./components/ContentPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Imprint from "./page/Imprint.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Contact from "./page/Contact.jsx";
import Privacy from "./page/Privacy.jsx";

//For Routing like /scoreboard
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page", element: <ContentPage /> },
  { path: "*", element: <ErrorBoundary /> },
  { path: "/imprint", element: <Imprint /> },
  { path: "/impressum", element: <Imprint /> },
  { path: "/contact", element: <Contact /> },
  { path: "/privacy", element: <Privacy /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
