// src/pages/TermsAndConditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => (
  <main className="max-w-3xl mx-auto py-16 px-4 space-y-6 text-gray-700">
    <h1 className="text-3xl font-bold">Terms &amp; Conditions</h1>

    {/* 1. Introduction */}
    <section>
      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p>
        Welcome to OpenPrep. These Terms &amp; Conditions ("Terms") govern your access to and use of
        our website and services located at <a href="https://openprep.academy" className="text-blue-600 hover:underline">https://openprep.academy</a>
        (the "Site"), operated by OpenPrep Academy ("we", "us", or "our").
      </p>
    </section>

    {/* 2. Educational Disclaimers */}
    <section>
      <h2 className="text-xl font-semibold mt-4">2. Educational Disclaimers</h2>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>No Guarantee of Results:</strong> OpenPrep provides practice questions, explanations,
          and analytics to support your exam preparation. We do not guarantee any specific score improvement or exam outcome.
        </li>
        <li>
          <strong>Accuracy &amp; Updates:</strong> While we strive for correctness, content may contain errors or be updated at any time.
          We reserve the right to add, modify, or remove content without prior notice.
        </li>
      </ul>
    </section>

    {/* 3. License and Intellectual Property */}
    <section>
      <h2 className="text-xl font-semibold mt-4">3. License &amp; Intellectual Property</h2>
      <p>
        Subject to compliance with these Terms, we grant you a limited, revocable,
        non-exclusive, non-transferable license to access and use the Site for personal,
        non-commercial purposes.
      </p>
      <p>
        All content, trademarks, logos, and data on the Site are the property of OpenPrep Academy or its licensors.
        You agree not to copy, distribute, or create derivative works without express permission.
      </p>
    </section>

    {/* 4. User Obligations */}
    <section>
      <h2 className="text-xl font-semibold mt-4">4. User Obligations</h2>
      <ul className="list-disc list-inside ml-4">
        <li>You must be at least 13 years old or have parental consent if under 18.</li>
        <li>You agree not to misuse the Service or interfere with its normal operation.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
      </ul>
    </section>

    {/* 5. Subscription & Auto-Renewal */}
    <section>
      <h2 className="text-xl font-semibold mt-4">5. Subscription &amp; Auto-Renewal</h2>
      <p>
        Certain features require payment of subscription fees. By subscribing, you agree to pay the applicable fees
        and authorize recurring payments until you cancel. Subscriptions auto-renew at the end of each billing period
        unless cancelled at least 3 days prior. You may manage or cancel your subscription in your account settings.
      </p>
    </section>

    {/* 6. Limitation of Liability */}
    <section>
      <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, OpenPrep Academy’s liability for any claim related to the Site,
        content accuracy, or exam results is capped at the total subscription fees you paid in the 12 months prior
        to the claim.
      </p>
    </section>

    {/* 7. Indemnification */}
    <section>
      <h2 className="text-xl font-semibold mt-4">7. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless OpenPrep Academy and its affiliates from any claims, liabilities,
        damages, or expenses arising out of your use of the Site or breach of these Terms.
      </p>
    </section>

    {/* 8. Governing Law & Jurisdiction */}
    <section>
      <h2 className="text-xl font-semibold mt-4">8. Governing Law &amp; Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction
        of the courts located in Bangalore, India.
      </p>
    </section>

    {/* 9. Changes to Terms */}
    <section>
      <h2 className="text-xl font-semibold mt-4">9. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. We will notify you of significant changes via email or in-app notification.
        Continued use after changes constitutes acceptance of the updated Terms.
      </p>
    </section>

    {/* 10. Contact Us */}
    <section>
      <h2 className="text-xl font-semibold mt-4">10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at
        <a href="mailto:hello@openprep.academy" className="text-blue-600 hover:underline"> hello@openprep.academy</a>.
      </p>
    </section>
  </main>
);

export default TermsAndConditions;