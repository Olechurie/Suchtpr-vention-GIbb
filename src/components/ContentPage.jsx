import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { lexikonPages } from "./lexikonPages";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";

function ContentPage() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    console.log("Aktuelle Seite:", tab);
  }, [tab]);

  const pageMap = useMemo(() => {
    const map = new Map();
    for (const p of lexikonPages) map.set(p.title, p);
    return map;
  }, [lexikonPages]);

  const currentPage = pageMap.get(tab);

  if (!currentPage) {
    return (
      <>
        <NavBar button={true} />
        <div className="bg-[#1e2128] p-7 m-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
          <div className="text-neutral-300 flex items-center gap-4 text-center">
            <FontAwesomeIcon
              icon={byPrefixAndName.fas["triangle-exclamation"]}
              size="2x"
              className="scale-155"
              style={{ color: "#00b8d9ff" }}
            />
            <h3 class="text-lg font-medium mb-1">
              {" "}
              Der Eintrag{" "}
              <span className="font-mono text-red-200">"{tab}"</span> existiert
              nicht im Lexikon.
            </h3>
          </div>
          <p className="text-neutral-400 mt-8">
            Bitte wähle eine Kategorie aus der Startseite aus.
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="p-8 text-neutral-100">
      <h1 className="text-3xl font-bold mb-6">{currentPage.h1}</h1>

      {currentPage.sections.map((s, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-cyan-400 text-xl font-bold mb-2">{s.h2}</h2>
          <div className="text-neutral-300 leading-7">{s.content}</div>
        </section>
      ))}
    </div>
  );
}

export default ContentPage;
