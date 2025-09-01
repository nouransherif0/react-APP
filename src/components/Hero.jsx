import heroBg from "../assets/hero.jpg"; // make sure hero.jpg exists

export default function Hero() {
  return (
    <div
      className="hero-container"
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Travel Holidays</h1>
        <h2 className="hero-subtitle">────── Travel ──────</h2>
        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </div>
  );
}
