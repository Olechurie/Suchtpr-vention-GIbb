import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "../iconLoader";

export default function Privacy() {
  return (
    <div>
      <NavBar button={true} />
      <div className="text-slate-50 mx-18 mt-10 mb-10 flex items-center gap-4">
        <FontAwesomeIcon
          icon={byPrefixAndName.fas["book-open"]}
          size="2x"
          className="scale-155"
          style={{ color: "#00b8d9ff" }}
        />
        <h1 className="text-[48px] font-bold">Privacy Policy</h1>
      </div>
      <div className="bg-black min-h-screen text-neutral-200 p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            1. Controller
          </h2>
          <p className="mb-4">
            This website/app (the “Service”) is operated by{" "}
            <strong>COMPANY/ORGANIZATION NAME</strong>,
            <strong> LEGAL FORM (e.g., GmbH)</strong>, located at{" "}
            <strong>ADDRESS, COUNTRY</strong>. For privacy inquiries, contact{" "}
            <strong>CONTACT EMAIL</strong> (Phone:{" "}
            <strong>PHONE (optional)</strong>).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            2. Scope
          </h2>
          <p className="mb-4">
            This policy explains how we process personal data when you visit or
            use the Service available at
            <strong> YOUR DOMAIN / APP NAME</strong> and related pages.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            3. What data we process
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3.1 Data you provide / data sent to our backend
          </h3>
          <p className="mb-4">
            The frontend sends data to our backend to provide the Service.
            Typical categories include:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              <strong>Request content</strong> required to perform the feature
              you use (e.g., query text, selected options, identifiers necessary
              for the request to work).
            </li>
            <li>
              <strong>Contact/inquiry data</strong> (if applicable): name, email
              address, message contents.
            </li>
          </ul>
          <p className="mb-4">
            <em>Purpose:</em> provide the requested functionality, handle
            inquiries, and support you.
            <br />
            <em>Legal basis:</em> Art. 6(1)(b) GDPR (performance of a contract
            or pre-contractual steps) and/or Art. 6(1)(f) GDPR (legitimate
            interests in offering a functional Service and responding to
            inquiries).
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3.2 No server access logs
          </h3>
          <p className="mb-4">
            Our backend is operated without retaining standard server access
            logs (e.g., we do not persist IP, user agent, or referrer in access
            logs). Transient processing may occur in memory to deliver
            responses, but we do not store access logs.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3.3 Cookies & local storage
          </h3>
          <p className="mb-4">
            We do not use cookies or local storage for analytics or marketing.
            If any values are stored locally, they are strictly necessary for
            basic UI preferences or session flow.
            <br />
            <em>Legal basis:</em> Art. 6(1)(f) GDPR (legitimate interests in
            core functionality).
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3.4 Analytics & tracking
          </h3>
          <p className="mb-4">
            We do <strong>not</strong> use analytics services (e.g., Google
            Analytics, Matomo, Plausible), advertising pixels, heatmaps, or
            similar tools.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            3.5 Third-party assets (Google Fonts)
          </h3>
          <p className="mb-4">
            The Service loads <strong>Google Fonts</strong>. When your browser
            requests these fonts, Google receives your IP address and standard
            request metadata to deliver the files to your device.
            <br />
            <em>Legal basis:</em> Art. 6(1)(f) GDPR (legitimate interests in
            fast, consistent font delivery).
            <br />
            <em>Option:</em> Upon request, we can self-host fonts to avoid
            third-party requests.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            4. Purposes of processing
          </h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Provide and operate the Service and its features</li>
            <li>Respond to user inquiries and support requests</li>
            <li>
              Maintain essential security and reliability (without storing
              access logs)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            5. Legal bases (GDPR)
          </h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Art. 6(1)(b) GDPR – performance of a contract or pre-contractual
              steps
            </li>
            <li>
              Art. 6(1)(f) GDPR – legitimate interests (operate a secure,
              reliable Service; provide essential features)
            </li>
            <li>
              Art. 6(1)(c) GDPR – where required to comply with legal
              obligations (e.g., responding to lawful requests)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            6. Retention
          </h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              <strong>Request payloads:</strong> processed only as necessary to
              fulfill your request. We do not retain separate server access
              logs. If operational data must be stored (e.g., to complete a
              task), we keep it only as long as needed for that purpose.
            </li>
            <li>
              <strong>Inquiry data (e.g., via email):</strong> retained as
              needed to process and for
              <strong> X months/years</strong> for documentation/compliance,
              then deleted or anonymized.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            7. Recipients & processors
          </h2>
          <p className="mb-4">
            We host the Service on <strong>YOUR GIBB SERVER / PROVIDER</strong>.
            Where we engage service providers (processors), we do so under Art.
            28 GDPR data processing agreements. Requests for Google Fonts are
            sent to <strong>Google</strong> to deliver font files.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            8. International transfers
          </h2>
          <p className="mb-4">
            Loading Google Fonts may involve transfers outside the
            EEA/Switzerland. Where required, such transfers rely on appropriate
            safeguards under Art. 46 GDPR (e.g., Standard Contractual Clauses)
            or other valid transfer mechanisms. Details are available on
            request.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            9. Security
          </h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures
            (e.g., TLS encryption in transit, access controls). While no method
            is 100% secure, we aim for industry-standard protection.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            10. Your rights
          </h2>
          <p className="mb-2">
            Under GDPR (and, where applicable, Swiss data protection law), you
            may have the rights to:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Access, rectification, and erasure</li>
            <li>Restriction of processing and data portability</li>
            <li>Object to processing based on legitimate interests</li>
            <li>
              Withdraw consent at any time (if processing is based on consent)
            </li>
          </ul>
          <p className="mb-4">
            To exercise your rights, contact <strong>CONTACT EMAIL</strong>. You
            can also lodge a complaint with your competent supervisory
            authority.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#00b8d9]">
            11. Children’s privacy
          </h2>
          <p className="mb-10">
            The Service is not directed to children under{" "}
            <strong>AGE (e.g., 16)</strong>. We do not knowingly collect data
            from children. Please contact us if you believe a child has provided
            data.
          </p>

          <hr className="border-[#2a2e36] mb-6" />
          <p className="text-sm text-neutral-400">
            Note: This Privacy Policy reflects a setup with a backend that
            processes request payloads, no persistent server access logs, no
            analytics, and Google Fonts. If your configuration changes (e.g.,
            you add analytics, forms that store messages, or server logs), this
            document must be updated.
          </p>
          <p className="mb-6">
            Last updated: <strong>YYYY-MM-DD</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
