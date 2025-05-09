import { ArrowRight, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium animate-fadeIn">
              <Brain size={18} />
              <span>AI-Powered GMAT Tutoring</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              GMAT Success,
              <span className="text-blue-600"> Simplified</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg">
              Ace your GMAT with personalized AI tutoring that adapts to your learning style and focuses on your weak areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://open-prep-fe.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                Start Free Trial
              </a>
              
              <a 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 group"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                alt="Student learning with AI tutor" 
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-3 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="text-xl font-bold">+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">120 Points</p>
                  <p className="text-sm text-gray-600">Avg. Score Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;