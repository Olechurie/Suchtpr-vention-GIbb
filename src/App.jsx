import { useState } from "react";
import Cards from "./components/Cards";
import "./styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "./iconLoader";

function App() {
  return (
    <>
      <div className="text-slate-50 mx-18 mt-10 mb-10 flex items-center gap-4">
        <FontAwesomeIcon
          icon={byPrefixAndName.fas["book-open"]}
          size="2x"
          className="scale-155"
          style={{ color: "#00b8d9ff" }}
        />
        <h1 className="text-[48px] font-bold">Lexikon</h1>
      </div>

      <Cards />
    </>
  );
}

export default App;
