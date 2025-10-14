import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { lexikonPages } from "./lexikonPages";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";
import Footer from "./Footer.jsx";

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
  }, []);

  const currentPage = pageMap.get(tab);

  if (!currentPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar button={true} />
        <div className="bg-[#1e2128] p-10 m-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
          <div className="text-neutral-300 flex items-center gap-4 text-center">
            <FontAwesomeIcon
              icon={byPrefixAndName.fas["triangle-exclamation"]}
              size="2x"
              className="scale-155"
              style={{ color: "#00b8d9ff" }}
            />
            <h3 className="text-lg font-medium mb-1">
              Der Eintrag{" "}
              <span className="font-mono text-red-200">"{tab}"</span> existiert
              nicht im Lexikon.
            </h3>
          </div>
          <p className="text-neutral-400 mt-8">
            Bitte wähle eine Kategorie auf der Startseite aus.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar button={true} />
      <main className="flex-1 p-8 text-neutral-100 px-10 ml-10">
        <div className="flex items-center gap-3 mb-8">
          <FontAwesomeIcon
            icon={currentPage.icon}
            className="text-cyan-400 text-3xl"
          />
          <h1 className="text-[48px] font-bold">{currentPage.h1}</h1>
        </div>

        {currentPage.sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-cyan-400 text-xl font-bold mb-2">{s.h2}</h2>
            <p className="text-neutral-300 leading-7 whitespace-pre-line">
              {s.text}
            </p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default ContentPage;
