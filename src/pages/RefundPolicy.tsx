// src/pages/RefundPolicy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => (
  <main className="max-w-3xl mx-auto py-16 px-4 space-y-6 text-gray-700">
    <h1 className="text-3xl font-bold">Refund Policy</h1>

    {/* 1. Applicability */}
    <section>
      <h2 className="text-xl font-semibold mt-4">1. Applicability</h2>
      <p>
        This Refund Policy applies to all paid subscriptions and one-time purchases made through
        <a href="https://openprep.academy" className="text-blue-600 hover:underline"> https://openprep.academy</a>.
      </p>
    </section>

    {/* 2. Free Trial */}
    <section>
      <h2 className="text-xl font-semibold mt-4">2. Free Trial</h2>
      <p>
        New users receive a 5-day free trial with full access—no credit card required. No refunds apply to free trials.
      </p>
    </section>

    {/* 3. Refund Eligibility */}
    <section>
      <h2 className="text-xl font-semibold mt-4">3. Refund Eligibility</h2>
      <ul className="list-disc list-inside ml-4">
        <li>Refunds may be requested within 5 days of purchase if you have not accessed more than 10% of paid content.</li>
        <li>Refunds will be processed only once per user per subscription term.</li>
        <li>No refunds for promotional offers or after the eligibility window.</li>
      </ul>
    </section>

    {/* 4. Refund Process */}
    <section>
      <h2 className="text-xl font-semibold mt-4">4. Refund Process</h2>
      <ol className="list-decimal list-inside ml-4">
        <li>Send refund requests to <a href="mailto:hello@openprep.academy" className="text-blue-600 hover:underline">hello@openprep.academy</a> with your order details.</li>
        <li>We will review and respond within 3 business days.</li>
        <li>If approved, refunds are issued to the original payment method within 14 business days.</li>
      </ol>
    </section>

    {/* 5. Chargebacks */}
    <section>
      <h2 className="text-xl font-semibold mt-4">5. Chargebacks</h2>
      <p>
        Initiating a chargeback without contacting us first may lead to subscription suspension and potential recovery actions.
      </p>
    </section>

    {/* 6. Contact Us */}
    <section>
      <h2 className="text-xl font-semibold mt-4">6. Contact Us</h2>
      <p>
        For any refund-related queries, please email
        <a href="mailto:hello@openprep.academy" className="text-blue-600 hover:underline"> hello@openprep.academy</a>.
      </p>
    </section>
  </main>
);

export default RefundPolicy;
