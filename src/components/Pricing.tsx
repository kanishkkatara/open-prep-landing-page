// src/components/Pricing.tsx
import React from 'react';

interface Plan {
  name: string;
  price: number;            // discounted price for the billing period
  strike: number;           // original price for the billing period
  periodLabel: string;      // e.g., 'per month', 'per 6 months', 'per year'
  billingPeriodMonths: number;
  popular?: boolean;
}

const plans: Plan[] = [
  { name: 'Monthly',     price: 50,  strike: 200,  periodLabel: 'per month',    billingPeriodMonths: 1 },
  { name: 'Semi-Annual', price: 250, strike: 1200, periodLabel: 'per 6 months', billingPeriodMonths: 6,   popular: true },
  { name: 'Annual',      price: 400, strike: 1600, periodLabel: 'per year',     billingPeriodMonths: 12 },
];

const Pricing: React.FC = () => (
  <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Plan</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan) => {
        const savingsPercent = Math.round((1 - plan.price / plan.strike) * 100);
        const monthlyCost = (plan.price / plan.billingPeriodMonths).toFixed(2);

        return (
          <div
            key={plan.name}
            className={`relative flex flex-col bg-white border-2 rounded-xl transition-transform duration-300
              ${plan.popular
                ? 'transform scale-105 border-blue-600 shadow-xl'
                : 'border-gray-200 shadow-md hover:shadow-xl'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-bl-lg">
                Most Popular
              </div>
            )}

            <div className="p-8 flex-grow text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

              <div className="flex items-baseline justify-center mb-4">
                <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.periodLabel}</span>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-2">
                <span className="text-gray-400 line-through">${plan.strike}</span>
                <span className="text-green-600 font-semibold">{savingsPercent}% off</span>
              </div>

              <p className="text-gray-700">≈ ${monthlyCost} /month</p>
            </div>

            <div className="p-6">
              <a
                href={import.meta.env.VITE_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center font-semibold rounded-lg transition-colors duration-300
                  ${plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-900 text-white'}`}
              >
                Get Started
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Pricing;
