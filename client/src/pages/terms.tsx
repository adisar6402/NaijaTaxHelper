import { Helmet } from "react-helmet";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
      <Helmet>
        <title>Terms of Use - NaijaTaxHelper</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Terms of Use — NaijaTaxHelper</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: June 27, 2025</p>

      <p className="mb-6">
        Welcome to NaijaTaxHelper! By using our platform, you agree to the terms outlined below.
        Please read carefully.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. About NaijaTaxHelper</h2>
      <p className="mb-4">
        NaijaTaxHelper is a free, AI-powered tax support tool built to help Nigerians understand,
        navigate, and stay compliant with evolving tax regulations, VAT exemptions, and personal/business obligations.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our website or services, you agree to comply with these Terms of Use.
        If you do not agree, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>You agree to use NaijaTaxHelper for lawful and responsible purposes.</li>
        <li>You are responsible for verifying information before taking financial or legal actions based on our content.</li>
        <li>You will not misuse or attempt to harm the platform, including security breaches, scraping, or data tampering.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Disclaimer</h2>
      <p className="mb-4">
        NaijaTaxHelper is provided as an educational and informational tool only.
        While we strive for accuracy, we do not offer professional tax, legal, or financial advice.
        Always consult a certified tax practitioner or legal expert for official guidance.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Availability and Access</h2>
      <p className="mb-4">
        We do our best to keep the platform available 24/7, but we cannot guarantee uninterrupted service.
        We reserve the right to modify or discontinue any part of the service at any time without prior notice.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content, branding, UI/UX, code, and tools on NaijaTaxHelper are owned by Abdulrahman Adisa Amuda
        and protected by copyright laws. You may not reproduce, distribute, or modify any part without permission.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Modifications</h2>
      <p className="mb-4">
        We may update these Terms occasionally. When we do, we will update the "Effective Date" above.
        Continued use after any changes constitutes your acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by the laws of the Federal Republic of Nigeria.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
      <p className="mb-6">
        For questions, feedback, or legal concerns, please reach out to:
        <br />
        📩 <a href="mailto:support@naijataxhelper.pages.dev" className="text-blue-600 underline">
          support@naijataxhelper.pages.dev
        </a>
      </p>

      <p className="italic text-gray-600">Empowering Nigerians. Simplifying Tax.</p>
    </div>
  );
}

