import { useEffect, useState, useRef } from 'react';

const Preloader = ({ onFinish }) => {
  const [logoPosition, setLogoPosition] = useState(-100);
  const [companyNamePosition, setCompanyNamePosition] = useState(-100);
  const [englishTextOpacity, setEnglishTextOpacity] = useState(0);
  const [arabicText, setArabicText] = useState('');
  const [airplanePosition, setAirplanePosition] = useState({ x: -100, y: 500 });
  const [showContent, setShowContent] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    logo: false,
    airplane: false
  });
  
  const fullArabicText = "أينما ترتقي نرتقي معك...";
  const airplaneRef = useRef(null);

  // Image URLs from online sources
  const backgroundUrl = "https://images.unsplash.com/photo-1713755001325-0d19ad4d271d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const airplaneUrl = "https://cdn-icons-png.freepik.com/512/16206/16206829.png?ga=GA1.1.1282661660.1756705899";
  const logoUrl = "https://cdn-icons-png.freepik.com/512/7953/7953969.png?ga=GA1.1.1282661660.1756705899";

  // Check if all images are loaded
  useEffect(() => {
    const checkImagesLoaded = () => {
      const allLoaded = Object.values(imagesLoaded).every(status => status);
      if (allLoaded) {
        startAnimations();
      }
    };
    
    checkImagesLoaded();
  }, [imagesLoaded]);

  const startAnimations = () => {
    // Logo animation
    setTimeout(() => setLogoPosition(0), 300);
    
    // Company name animation
    setTimeout(() => setCompanyNamePosition(0), 600);
    
    // English text fade in
    setTimeout(() => setEnglishTextOpacity(1), 1500);
    
    // Arabic text typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullArabicText.length) {
        setArabicText(fullArabicText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Airplane animation
        const interval = setInterval(() => {
          setAirplanePosition(prev => {
            const newX = prev.x + 15;
            const newY = prev.y - 10;
            
            if (newX > window.innerWidth + 100 || newY < -100) {
              clearInterval(interval);
              // Finish preloader after airplane exits
              setTimeout(() => {
                setShowContent(false);
                onFinish();
              }, 500);
              return prev;
            }
            
            return { x: newX, y: newY };
          });
        }, 30);
      }
    }, 100);
  };

  const handleImageLoad = (imageName) => {
    setImagesLoaded(prev => ({ ...prev, [imageName]: true }));
  };

  const handleImageError = (imageName) => {
    console.log(`Image ${imageName} failed to load, using fallback`);
    setImagesLoaded(prev => ({ ...prev, [imageName]: true }));
  };

  if (!showContent) return null;

  return (
    <div className="preloader">
      {/* Background Image with Fallback */}
      <div className="preloader-background">
        <img 
          src={backgroundUrl} 
          alt="Background" 
          onLoad={() => handleImageLoad('background')}
          onError={() => handleImageError('background')}
        />
        {!imagesLoaded.background && <div className="image-fallback background-fallback"></div>}
      </div>
      
      <div className="preloader-content">
        {/* Logo with Fallback */}
        <div className="logo-container">
          <img 
            src={logoUrl} 
            alt="Travel Holidays Logo" 
            className="preloader-logo"
            style={{ transform: `translateY(${logoPosition}px)` }}
            onLoad={() => handleImageLoad('logo')}
            onError={() => handleImageError('logo')}
          />
          {!imagesLoaded.logo && <div className="image-fallback logo-fallback">🌎</div>}
        </div>
        
        <h1 
          className="company-name"
          style={{ transform: `translateY(${companyNamePosition}px)` }}
        >
          Travel Holidays
        </h1>
        
        <p 
          className="english-text"
          style={{ opacity: englishTextOpacity }}
        >
          Whenever you rise... we rise with you
        </p>
        
        <p 
          className="arabic-text"
        >
          {arabicText}
        </p>
      </div>
      
      {/* Airplane with Fallback */}
      <div className="airplane-container">
        <img 
          ref={airplaneRef}
          src={airplaneUrl} 
          alt="Airplane" 
          className="airplane"
          style={{ 
            left: `${airplanePosition.x}px`, 
            top: `${airplanePosition.y}px` 
          }}
          onLoad={() => handleImageLoad('airplane')}
          onError={() => handleImageError('airplane')}
        />
        {!imagesLoaded.airplane && (
          <div 
            className="image-fallback airplane-fallback"
            style={{ 
              left: `${airplanePosition.x}px`, 
              top: `${airplanePosition.y}px` 
            }}
          >✈</div>
        )}
      </div>
    </div>
  );
};

export default Preloader;