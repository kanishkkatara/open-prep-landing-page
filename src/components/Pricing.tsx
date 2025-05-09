import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "Monthly",
    description: "Perfect for those just starting their GMAT journey",
    features: [
      "AI-powered diagnostic assessment",
      "Personalized study plan",
      "500+ practice questions",
      "Basic performance analytics",
      "Email support"
    ],
    notIncluded: [
      "Advanced score prediction",
      "Live AI tutoring sessions",
      "Essay grading & feedback"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    price: "$199",
    period: "Monthly",
    description: "Our most popular plan for serious GMAT students",
    features: [
      "Everything in Basic",
      "2,000+ practice questions",
      "Advanced score prediction",
      "Detailed analytics dashboard",
      "5 live AI tutoring sessions",
      "Priority email support"
    ],
    notIncluded: [
      "Unlimited live tutoring",
      "Essay grading & feedback"
    ],
    cta: "Get Premium Access",
    popular: true
  },
  {
    name: "Ultimate",
    price: "$299",
    period: "Monthly",
    description: "The complete package for maximum score improvement",
    features: [
      "Everything in Premium",
      "5,000+ practice questions",
      "Unlimited live AI tutoring sessions",
      "Essay grading & feedback",
      "Personalized weekly reviews",
      "Admission consulting session",
      "24/7 priority support"
    ],
    notIncluded: [],
    cta: "Get Ultimate Access",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose the plan that fits your GMAT preparation needs. All plans include our core AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'transform scale-105 shadow-xl border-blue-600 relative z-10' 
                  : 'shadow-md border-gray-200'
              } bg-white border-2 transition-all duration-300 hover:shadow-xl flex flex-col`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-bold uppercase tracking-wide py-1 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 sm:p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check size={20} className="text-green-500 shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start opacity-50">
                      <X size={20} className="text-red-500 shrink-0 mt-0.5 mr-2" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 sm:px-8 pb-8">
                <a
                  href={import.meta.env.VITE_PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-700">
          <p>All plans come with a 7-day money-back guarantee. No questions asked.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;