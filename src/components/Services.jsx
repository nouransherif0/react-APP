// File: src/components/Services.jsx
import { Plane, Hotel, Car, Globe } from "lucide-react";

export default function Services() {
  return (
    <div className="services-container" id="services">
      <h2>Our Services</h2>

      <div className="services-boxes">
        <div className="service-box">
          <Plane className="service-icon" />
          <h3>Flight Booking</h3>
        </div>

        <div className="service-box">
          <Hotel className="service-icon" />
          <h3>Hotel Reservations</h3>
        </div>

     

        <div className="service-box">
          <Globe className="service-icon" />
          <h3>Tour Packages</h3>
        </div>
      </div>
    </div>
  );
}
