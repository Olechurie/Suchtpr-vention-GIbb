import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";

function imprint() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar button={true} />
        <div className="text-slate-50 mx-18 mt-10 mb-10 flex items-center gap-4">
          <FontAwesomeIcon
            icon={byPrefixAndName.fas["book-open"]}
            size="2x"
            className="scale-155"
            style={{ color: "#00b8d9ff" }}
          />
          <h1 className="text-[48px] font-bold">Legal Notice</h1>
        </div>
        <div className="bg-black min-h-screen text-neutral-200 p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-[#00b8d9]">
              Legal Notice / Imprint
            </h1>

            <p className="mb-4">
              Information according to § 5 TMG (German Telemedia Act)
            </p>

            <p className="mb-4">
              <strong>Company:</strong> Example GmbH
              <br />
              <strong>Represented by:</strong> Max Mustermann
              <br />
              Musterstraße 12
              <br />
              12345 Musterstadt
              <br />
              Germany
            </p>

            <p className="mb-4">
              <strong>Contact:</strong>
              <br />
              Phone: +49 (0) 123 456789
              <br />
              E-Mail: info@example.com
            </p>

            <p className="mb-4">
              <strong>VAT ID:</strong> DE123456789
              <br />
              <strong>Commercial Register:</strong> District Court Musterstadt,
              HRB 12345
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3 text-[#00b8d9]">
              Disclaimer
            </h2>
            <p className="mb-4">
              Despite careful content control, we assume no liability for the
              content of external links. The operators of linked pages are
              solely responsible for their content.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-3 text-[#00b8d9]">
              Copyright
            </h2>
            <p>
              All content and works created by the site operators on these pages
              are subject to German copyright law. Contributions by third
              parties are marked as such.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default imprint;
