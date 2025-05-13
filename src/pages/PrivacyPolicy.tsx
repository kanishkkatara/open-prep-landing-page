// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <main className="max-w-3xl mx-auto py-16 px-4 space-y-6 text-gray-700">
    <h1 className="text-3xl font-bold">Privacy Policy</h1>

    {/* 1. Introduction */}
    <section>
      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p>
        OpenPrep Academy values your privacy. This Privacy Policy explains how we collect, use, and disclose personal
        information when you visit or sign up on <a href="https://openprep.academy" className="text-blue-600 hover:underline">https://openprep.academy</a>.
      </p>
    </section>

    {/* 2. Information We Collect */}
    <section>
      <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Personal Data:</strong> Name, email, phone number, profile details.</li>
        <li><strong>Academic Performance:</strong> Practice history, question accuracy, time per question, progress metrics.</li>
        <li><strong>Usage Analytics:</strong> Page visits, feature usage, session duration, device/browser info.</li>
        <li><strong>Cookies &amp; Tracking:</strong> Log files, cookies, and similar technologies.</li>
      </ul>
    </section>

    {/* 3. How We Use Data */}
    <section>
      <h2 className="text-xl font-semibold mt-4">3. How We Use Data</h2>
      <ul className="list-disc list-inside ml-4">
        <li>To provide and maintain the Service.</li>
        <li>To personalize user experience and power adaptive recommendations.</li>
        <li>To send transactional emails, updates, and promotional communications (with opt-out).</li>
        <li>To analyze usage patterns and improve features and performance.</li>
      </ul>
    </section>

    {/* 4. Data Sharing & Disclosure */}
    <section>
      <h2 className="text-xl font-semibold mt-4">4. Data Sharing &amp; Disclosure</h2>
      <p>
        We do not sell your personal data. We may share data with trusted third-party processors, including payment gateways,
        analytics providers, and AI service vendors (e.g., OpenAI, DeepSeek), under strict confidentiality and security obligations.
      </p>
    </section>

    {/* 5. Data Security & Retention */}
    <section>
      <h2 className="text-xl font-semibold mt-4">5. Data Security &amp; Retention</h2>
      <p>
        We implement reasonable security measures (encryption, access controls, audits) to protect your data. We retain personal
        data only as long as necessary for the purposes outlined or as required by law, after which it is securely deleted.
      </p>
    </section>

    {/* 6. Minors */}
    <section>
      <h2 className="text-xl font-semibold mt-4">6. Minors</h2>
      <p>
        The Service is intended for users aged 13 and above. We do not knowingly collect data from children under 13. If you believe data
        from a minor has been collected, please contact us.
      </p>
    </section>

    {/* 7. Your Rights */}
    <section>
      <h2 className="text-xl font-semibold mt-4">7. Your Rights</h2>
      <ul className="list-disc list-inside ml-4">
        <li>Access, correct, or delete your personal data.</li>
        <li>Object to processing or withdraw consent at any time.</li>
        <li>Request a copy of your data or portability.</li>
      </ul>
    </section>

    {/* 8. Cookies */}
    <section>
      <h2 className="text-xl font-semibold mt-4">8. Cookies</h2>
      <p>
        We use cookies to enhance user experience. You can disable cookies via your browser settings, but some features may not work properly.
      </p>
    </section>

    {/* 9. Changes to this Policy */}
    <section>
      <h2 className="text-xl font-semibold mt-4">9. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy periodically. We will notify you of significant changes via email or in-app notification.
        Continued use after updates constitutes acceptance of the revised Policy.
      </p>
    </section>

    {/* 10. Contact Us */}
    <section>
      <h2 className="text-xl font-semibold mt-4">10. Contact Us</h2>
      <p>
        For privacy inquiries or data requests, contact us at
        <a href="mailto:hello@openprep.academy" className="text-blue-600 hover:underline"> hello@openprep.academy</a>.
      </p>
    </section>
  </main>
);

export default PrivacyPolicy;
