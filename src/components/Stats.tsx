import { Users, Globe, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    value: "10,000+",
    label: "Students"
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    value: "42",
    label: "Countries"
  },
  {
    icon: <Star className="w-10 h-10 text-blue-600" />,
    value: "4.8/5",
    label: "Average Rating"
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    value: "120+",
    label: "Avg. Point Improvement"
  }
];

const Stats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their GMAT scores with Open Prep.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="mx-auto mb-4 p-3 rounded-full bg-blue-100 inline-block">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;