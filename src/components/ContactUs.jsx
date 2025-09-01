import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="contact-container" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-box">
        <div className="contact-item">
          <Phone className="contact-icon" />
          <span>+20 123 456 789</span>
        </div>
        <div className="contact-item">
          <MapPin className="contact-icon" />
          <span>123 Cairo Street, Egypt</span>
        </div>
        <div className="contact-item">
          <Mail className="contact-icon" />
          <span>info@travelholidays.com</span>
        </div>
      </div>
    </div>
  );
}
