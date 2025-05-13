import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jessica Chen",
    position: "Harvard Business School, 2024",
    scoreImprovement: 130,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    content: "OpenPrep helped me boost my GMAT score by 130 points in just 6 weeks. The AI-powered approach identified my weak areas instantly that saved me countless hours.",
    stars: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Wharton School, 2023",
    scoreImprovement: 120,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "After trying multiple prep courses without much improvement, OpenPrep's adaptive learning system made all the difference. I improved my quant score from the 60th to the 90th percentile in just a month.",
    stars: 5
  },
  {
    id: 3,
    name: "Aisha Patel",
    position: "INSEAD, 2024",
    scoreImprovement: 140,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content: "The personalized approach of OpenPrep is game-changing. Their AI tutor identified patterns in my mistakes that I couldn't see myself, allowing me to focus precisely on what I needed to improve.",
    stars: 5
  },
  {
    id: 4,
    name: "David Kim",
    position: "Stanford GSB, 2023",
    scoreImprovement: 110,
    image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
    content: "I was skeptical about AI tutoring at first, but OpenPrep exceeded my expectations. The platform adapted to my learning style and schedule, making my prep much more efficient than traditional methods.",
    stars: 4
  },
  // {
  //   id: 5,
  //   name: "Sarah Johnson",
  //   position: "Columbia Business School, 2024",
  //   image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  //   content: "OpenPrep transformed my GMAT journey. The analytics provided clear insights into my progress, and the adaptive question bank ensured I was always challenged at the right level.",
  //   stars: 5
  // },
  // {
  //   id: 6,
  //   name: "Omar Hamad",
  //   position: "London Business School, 2023",
  //   image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  //   content: "As someone with a busy work schedule, OpenPrep's time-efficient approach was exactly what I needed. I achieved my target score while studying just 1-2 hours daily.",
  //   stars: 5
  // }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    let itemsToShow = 1;
    if (windowWidth >= 1024) {
      itemsToShow = 3;
    } else if (windowWidth >= 640) {
      itemsToShow = 2;
    }
    
    const endIndex = activeIndex + itemsToShow;
    let testimonialSlice = [];
    
    if (endIndex > testimonials.length) {
      testimonialSlice = [
        ...testimonials.slice(activeIndex),
        ...testimonials.slice(0, endIndex - testimonials.length)
      ];
    } else {
      testimonialSlice = testimonials.slice(activeIndex, endIndex);
    }
    
    setVisibleTestimonials(testimonialSlice);
  }, [activeIndex, windowWidth]);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Hear from students who transformed their GMAT journey with OpenPrep.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 transition-all duration-500 animate-fadeIn"
              >
                <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100 flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.scoreImprovement} point improvement in GMAT FE</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.stars)}
                  </div>
                  
                  <p className="text-gray-700 italic flex-grow">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 focus:outline-none z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;