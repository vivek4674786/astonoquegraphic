import altimg from '../assets/altimg.jpg';
import Image from '../components/Image';

export default function PortfolioGlimps() {
  const imagesArray1 = [
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    }
  ]

  const imagesArray2 = [
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    },
    {
      src: altimg,
      alt: 'Portfolio 1',
    }
  ]

  return (
    <div id="portfolio" className='py-5'>
      <h3 className="text-4xl py-5 font-bold text-center">Portfolio Glimps</h3>
      <div className="overflow-hidden">
        <div className="flex animate-infinite-scroll-left gap-6">
          {imagesArray1.map((image, index) => (
            <Image
            key={`display-${index}`}
            src={image.src} 
            alt={image.alt}
            className="w-100 h-60 border rounded-4xl object-cover  flex-shrink-0"
          />
          ))}
          {imagesArray1.map((image, index) => (
            <img 
              key={`duplicate-${index}`}
              src={image.src} 
              alt={image.alt}
              className="w-100 h-60 object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="flex animate-infinite-scroll-right gap-6 mt-6 [animation-direction:reverse]">
          {imagesArray2.map((image, index) => (
            <Image
              key={`display-${index}`}
              src={image.src} 
              alt={image.alt}
              className="w-100 h-60 border rounded-4xl object-cover  flex-shrink-0"
            />
          ))}
          {imagesArray2.map((image, index) => (
            <img 
              key={`duplicate-${index}`}
              src={image.src} 
              alt={image.alt}
              className="w-100 h-60 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}