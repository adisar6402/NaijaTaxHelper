import { Helmet } from "react-helmet";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Effective Date: June 27, 2025</p>

      <p className="mb-6">
        At <strong>NaijaTaxHelper</strong>, we value your privacy and are committed to protecting your personal data.
        This Privacy Policy outlines how we collect, use, and protect information you provide while using our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Your name and email (if you contact support)</li>
        <li>Non-personal usage data (analytics, performance tracking)</li>
        <li>No sensitive financial or tax data is stored</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>To respond to support inquiries</li>
        <li>To improve our platform’s performance and accuracy</li>
        <li>To send occasional updates (only if opted in)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Sharing</h2>
      <p className="mb-6">
        We do not sell or rent your personal data. Any third-party services (e.g., analytics, hosting)
        used are GDPR-compliant and follow strict confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Security</h2>
      <p className="mb-6">
        We implement best-in-class security practices to protect your information. However,
        please be aware that no digital platform is 100% immune to threats.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies</h2>
      <p className="mb-6">
        Our site may use minimal cookies to enhance functionality, but we do not use tracking or advertising cookies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-6">
        We may occasionally update this Privacy Policy. Updates will be posted here, and continued use
        of the platform indicates acceptance of changes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
      <p className="mb-6">
        If you have questions about this Privacy Policy, contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@naijataxhelper.pages.dev"
          className="text-blue-600 underline"
        >
          support@naijataxhelper.pages.dev
        </a>
      </p>

      <p className="mt-8 font-medium text-center text-green-700">
        Thank you for trusting NaijaTaxHelper.
      </p>
    </div>
  );
}
