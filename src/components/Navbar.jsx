import React from "react";

function NavBar({ button }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow">
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex-1 flex justify-center space-x-8">
        <a
          href="/"
          className="text-neutral-200 hover:text-blue-500 font-medium"
        >
          Home
        </a>
        <a
          href="/lexikon"
          className="text-neutral-200 hover:text-blue-500 font-medium"
        >
          Lexikon
        </a>
      </div>
      <div className="flex-shrink-0">
        {button ? (
          <a
            href="/lexikon"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Zurück zum Lexikon
          </a>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
