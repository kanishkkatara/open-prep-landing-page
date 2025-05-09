import { 
  Brain, 
  Sparkles, 
  Clock, 
  BarChart2, 
  Target, 
  Lightbulb 
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    title: "AI-Powered Personalization",
    description: "Our AI analyzes your strengths and weaknesses to create a customized study plan that evolves as you learn."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-blue-600" />,
    title: "Adaptive Question Bank",
    description: "Practice with questions that automatically adjust to your skill level, ensuring optimal challenge and growth."
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Time-Efficient Learning",
    description: "Focus only on areas that need improvement, cutting down study time by up to 40% compared to traditional methods."
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics and insights to understand your learning trajectory."
  },
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: "Score Prediction",
    description: "Our AI predicts your GMAT score based on your performance, helping you gauge your readiness."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "Conceptual Clarity",
    description: "Get clear, concise explanations for every question, ensuring deep understanding of core concepts."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Open Prep?</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our AI-powered approach revolutionizes GMAT preparation with features designed for efficiency and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 p-2 rounded-full bg-blue-50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={import.meta.env.VITE_PLATFORM_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Experience Smart Tutoring
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;