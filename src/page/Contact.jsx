import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";

function Contact() {
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
          <h1 className="text-[48px] font-bold">Contact</h1>
        </div>
        <div className="bg-black min-h-screen text-neutral-200 p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-[#00b8d9]">
              Contact
            </h1>
            <p className="mb-6">
              Feel free to reach out to us using the contact information below.
              We’re happy to answer your questions or receive your feedback.
            </p>

            <div className="space-y-4">
              <p>
                <strong>Company:</strong> Example GmbH
                <br />
                Musterstraße 12
                <br />
                12345 Musterstadt
                <br />
                Germany
              </p>

              <p>
                <strong>Phone:</strong> +49 (0) 123 456789
                <br />
                <strong>Email:</strong> contact@example.com
              </p>

              <p>
                <strong>Business hours:</strong>
                <br />
                Monday – Friday: 9:00 AM – 5:00 PM
                <br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
