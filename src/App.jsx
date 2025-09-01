import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Preloader from "./components/Preloader";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
    // Remove the preloader from DOM after animation completes
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
    }, 500);
  };

  return (
    <div className="App">
      {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
      <div className={`main-website-content ${isLoading ? 'hidden' : 'visible'}`}>
        <Navbar />
        <Hero />
        <SearchBox />
        <Home />
        <AboutUs />
        <Services />
        <ContactUs />
      </div>
    </div>
  );
}