import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { lexikonPages } from "./lexikonPages";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";
import Footer from "./Footer.jsx";
import axios from "axios";
import iconMap from "./iconMap";

function tryParseJSON(value) {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const withoutTrailingCommas = trimmed.replace(/,\s*([}\]])/g, "$1");

  const attempts = [
    () => JSON.parse(trimmed),
    () => JSON.parse(withoutTrailingCommas),
    () => JSON.parse(`[${trimmed}]`),
    () => {
      const normalized = withoutTrailingCommas
        .replace(/}\s*{/g, "},{")
        .replace(/,\s*$/, "");
      return JSON.parse(`[${normalized}]`);
    },
  ];

  for (const attempt of attempts) {
    try {
      const parsed = attempt();
      if (parsed !== undefined) {
        return parsed;
      }
    } catch (_error) {
      // try next strategy
      continue;
    }
  }

  return null;
}

function normalizeSections(sectionsInput) {
  const parsed = tryParseJSON(sectionsInput);
  const sectionsArray = Array.isArray(parsed)
    ? parsed
    : typeof parsed === "object" && parsed !== null
    ? Object.values(parsed)
    : Array.isArray(sectionsInput)
    ? sectionsInput
    : [];

  if (
    (!sectionsArray || sectionsArray.length === 0) &&
    typeof sectionsInput === "string"
  ) {
    return [
      {
        h2: "Details",
        text: sectionsInput,
      },
    ];
  }

  return sectionsArray
    .map((section, index) => {
      if (typeof section === "string") {
        return {
          h2: `Abschnitt ${index + 1}`,
          text: section,
        };
      }

      if (section && typeof section === "object") {
        const heading =
          section.h2 ||
          section.heading ||
          section.title ||
          `Abschnitt ${index + 1}`;
        const text =
          section.text ||
          section.content ||
          section.body ||
          section.description ||
          "";

        return {
          h2: heading,
          text,
        };
      }

      return null;
    })
    .filter(Boolean);
}

function resolveIcon(iconCandidate) {
  if (!iconCandidate) {
    return null;
  }

  if (
    typeof iconCandidate === "object" &&
    iconCandidate !== null &&
    iconCandidate.iconName
  ) {
    return iconCandidate;
  }

  if (Array.isArray(iconCandidate) && iconCandidate.length === 2) {
    const [prefix, iconName] = iconCandidate;
    return byPrefixAndName[prefix]?.[iconName] || null;
  }

  if (typeof iconCandidate === "string") {
    const trimmed = iconCandidate.trim();
    if (!trimmed) {
      return null;
    }

    const parts = trimmed.split(/\s+/);
    let iconNamePart = null;

    for (const part of parts) {
      if (part.startsWith("fa-")) {
        iconNamePart = part.replace(/^fa-/, "");
        break;
      }
    }

    if (!iconNamePart) {
      iconNamePart = trimmed.replace(/^fa-/, "");
    }

    return iconMap[iconNamePart] || null;
  }

  return null;
}

function resolveAnyIcon(candidate) {
  if (!candidate) {
    return null;
  }

  if (typeof candidate === "object" && candidate.iconName) {
    return candidate;
  }

  return resolveIcon(candidate);
}

function normalizePagePayload(
  payload,
  fallbackName,
  rawStringPayload,
  fallbackIconHint
) {
  if (payload === null || payload === undefined) {
    return null;
  }

  const parsed = tryParseJSON(payload);
  let page =
    parsed && Array.isArray(parsed) ? parsed[0] : parsed || payload;

  if (typeof page === "string") {
    const jsonParsed = tryParseJSON(page);
    page =
      jsonParsed && Array.isArray(jsonParsed)
        ? jsonParsed[0]
        : jsonParsed || null;
  }

  if (!page || typeof page !== "object") {
    const fallbackIconObject = resolveAnyIcon(fallbackIconHint);
    if (typeof rawStringPayload === "string" && rawStringPayload.trim()) {
      return {
        title: fallbackName || "Unbenannter Eintrag",
        h1: fallbackName || "Unbenannter Eintrag",
        icon: fallbackIconObject,
        iconSvg:
          typeof fallbackIconHint === "string" ? fallbackIconHint : null,
        sections: [
          {
            h2: "Rohdaten",
            text: rawStringPayload,
          },
        ],
        isRawFallback: true,
      };
    }
    return null;
  }

  const sections =
    normalizeSections(page.sections ?? page.content ?? page.body) || [];
  const inferredName =
    page.title || page.name || page.h1 || fallbackName || "";
  const fallbackIconObject = resolveAnyIcon(fallbackIconHint);

  return {
    title: inferredName,
    h1: page.h1 || page.title || page.name || fallbackName || "",
    icon:
      resolveAnyIcon(page.icon) ||
      resolveAnyIcon(page.iconSvg) ||
      resolveAnyIcon(page.iconName) ||
      fallbackIconObject,
    iconSvg:
      (typeof page.iconSvg === "string" && page.iconSvg) ||
      (typeof page.iconName === "string" && page.iconName) ||
      (typeof page.icon === "string" && page.icon) ||
      (typeof fallbackIconHint === "string" ? fallbackIconHint : null),
    sections,
    isRawFallback: false,
  };
}

function RichContent({ text }) {
  if (!text) {
    return null;
  }

  if (/<[a-z][\s\S]*>/i.test(text)) {
    return (
      <div
        className="space-y-4 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_strong]:font-semibold [&_strong]:text-[#00b8d9ff] [&_b]:font-semibold [&_b]:text-[#00b8d9ff]"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  return <p className="whitespace-pre-line">{text}</p>;
}

function ContentPage() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const location = useLocation();
  const locationIconHint =
    location?.state?.iconSvg ||
    location?.state?.iconName ||
    location?.state?.icon ||
    null;

  useEffect(() => {
    console.log("Aktuelle Seite:", tab);
  }, [tab]);

  const pageMap = useMemo(() => {
    const map = new Map();
    for (const p of lexikonPages) {
      if (!p || !p.title) {
        continue;
      }
      map.set(p.title, p);
      map.set(p.title.toLowerCase(), p);
    }
    return map;
  }, []);

  const normalizedTab = tab ? tab.toLowerCase() : null;
  const fallbackPage = normalizedTab ? pageMap.get(normalizedTab) : null;
  const fallbackIconHint =
    locationIconHint ||
    fallbackPage?.iconSvg ||
    fallbackPage?.iconName ||
    fallbackPage?.icon ||
    null;

  const [pageData, setPageData] = useState(fallbackPage || null);
  const [isLoading, setIsLoading] = useState(!fallbackPage);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setPageData(fallbackPage || null);
    if (fallbackPage) {
      setIsLoading(false);
    }
  }, [fallbackPage]);

  useEffect(() => {
    if (!normalizedTab) {
      setHasError(false);
      setIsLoading(false);
      setPageData(null);
      return;
    }

    const controller = new AbortController();
    let isActive = true;

    setIsLoading(true);
    setHasError(false);

    axios
      .get(
        `https://sucht.clavitus.ch:8443/request?inhalt=drug&substanz=${encodeURIComponent(
          normalizedTab
        )}`,
        { signal: controller.signal }
      )
      .then((response) => {
        console.debug(
          "Drug API response for",
          normalizedTab,
          ":",
          response
        );
        const rawPayload =
          typeof response.data === "string"
            ? response.data
            : JSON.stringify(response.data, null, 2);
        console.debug("Drug API raw payload:", rawPayload);
        if (!isActive) {
          return;
        }
        const normalized = normalizePagePayload(
          response.data,
          tab,
          rawPayload,
          fallbackIconHint
        );
        if (normalized) {
          console.debug("Normalized page payload:", normalized);
          setPageData(normalized);
          setHasError(normalized.isRawFallback);
        } else if (fallbackPage) {
          console.warn(
            "Falling back to local page data for",
            normalizedTab,
            "(API payload empty or malformed)."
          );
          setPageData(fallbackPage);
          setHasError(true);
        } else {
          console.warn(
            "Drug API payload could not be normalized:",
            rawPayload
          );
          setPageData(null);
          setHasError(true);
        }
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }
        if (axios.isCancel(error)) {
          return;
        }
        console.error(
          "Failed to load page content for",
          normalizedTab,
          ":",
          error
        );
        if (error?.response) {
          console.error(
            "Error response status:",
            error.response.status,
            "payload:",
            error.response.data
          );
        }
        if (fallbackPage) {
          setPageData(fallbackPage);
        }
        setHasError(true);
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [normalizedTab, fallbackPage, tab, fallbackIconHint]);

  const currentPage = pageData;
  const displayIcon =
    [
      currentPage?.icon,
      currentPage?.iconSvg,
      locationIconHint,
      fallbackPage?.icon,
      fallbackPage?.iconSvg,
      fallbackPage?.iconName,
    ]
      .map(resolveAnyIcon)
      .find(Boolean) || null;

  if (isLoading && !currentPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar button={true} />
        <div className="flex-1 flex flex-col items-center justify-center text-neutral-400">
          Inhalte werden geladen …
        </div>
        <Footer />
      </div>
    );
  }

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
          {displayIcon && (
            <FontAwesomeIcon
              icon={displayIcon}
              className="text-[#00b8d9ff] text-3xl"
            />
          )}
          <h1 className="text-[48px] font-bold text-[#00b8d9ff]">
            {currentPage.h1}
          </h1>
        </div>

        {(currentPage.sections || []).map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-[#00b8d9ff] text-xl font-bold mb-2">
              {s.h2}
            </h2>
            <div className="text-neutral-300 leading-7">
              <RichContent text={s.text} />
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default ContentPage;
