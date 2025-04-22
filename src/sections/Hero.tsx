import { useState, useEffect } from 'react';
import NevigateRight from '../assets/Icons/NevigateRight';
import NevigateLeft from '../assets/Icons/NevigateLeft';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace these with your actual image URLs
  const slides = [
    {
      title: 'Logos',
      bgColor: 'bg-red-200',
      description: 'We create logos for your business'
    },
    {
      title: 'Visiting Cards',
      bgColor: 'bg-blue-200',
      description: 'We create visiting cards for your business'
    },
    {
      title: 'Banners',
      bgColor: 'bg-green-200',
      description: 'We create banners for your business'
    },
    {
      title: 'Posters',
      bgColor: 'bg-yellow-200',
      description: 'We create posters for your business'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full flex items-center justify-left h-full ${slide.bgColor}`}
          >
            <div className='w-1/2 '>
              <h3 className='text-4xl font-bold text-center'>{slide.title}</h3>
            </div>
            <div className='w-1/2'>
              <p className='text-center'>"{slide.description}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full"
      >
        <NevigateLeft />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full"
      >
        <NevigateRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
