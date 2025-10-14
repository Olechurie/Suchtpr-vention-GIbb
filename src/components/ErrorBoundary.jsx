import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer.jsx";

function ErrorBoundary() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar button={true} />
      <main className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Seite nicht gefunden</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-md font-medium"
        >
          Zurück zur Startseite
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ErrorBoundary;
