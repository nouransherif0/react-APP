import { Twitter, Instagram, Facebook } from "lucide-react";
import logo from "../assets/logo.png"; // make sure logo.png exists

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Travel Agency Logo" className="logo-img" />
      </div>
      <div className="socials">
        <span>Follow us:</span>
        <a className="twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={22} />
        </a>
        <a className="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={22} />
        </a>
        <a className="facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={22} />
        </a>
      </div>
    </nav>
  );
}
