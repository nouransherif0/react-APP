import { useState, useRef } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const Home = () => {
  const dealsRef = useRef(null);
  const hotelsRef = useRef(null);
  const activitiesRef = useRef(null);

  const [favoriteHotels, setFavoriteHotels] = useState([]);

  const toggleFavorite = (id) => {
    if (favoriteHotels.includes(id)) {
      setFavoriteHotels(favoriteHotels.filter((hotelId) => hotelId !== id));
    } else {
      setFavoriteHotels([...favoriteHotels, id]);
    }
  };

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Summer deals data
  const summerDeals = [
    {
      id: 1,
      name: "Dubai Gateway",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Maldives Paradise",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "European Tour",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Turkish Delights",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Bali Escape",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Thai Adventure",
      price: 549,
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Hotels data
  const hotels = [
    {
      id: 101,
      name: "Burj Al Arab",
      location: "Dubai, UAE",
      price: 350,
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1679899608908-2e9536b14617?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 102,
      name: "Conrad Maldives",
      location: "Rangali Island, Maldives",
      price: 550,
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 103,
      name: "Hilton Istanbul",
      location: "Istanbul, Turkey",
      price: 220,
      stars: 4,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 104,
      name: "Paris Marriott",
      location: "Paris, France",
      price: 280,
      stars: 4,
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 105,
      name: "The Ritz-Carlton",
      location: "New York, USA",
      price: 450,
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 106,
      name: "Banyan Tree",
      location: "Bangkok, Thailand",
      price: 320,
      stars: 5,
      image:
        "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Activities data
  const activities = [
    {
      id: 201,
      name: "Desert Safari",
      location: "Dubai, UAE",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 202,
      name: "Scuba Diving",
      location: "Sharm El Sheikh, Egypt",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 203,
      name: "Skydiving",
      location: "Dubai, UAE",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 204,
      name: "Hot Air Balloon Ride",
      location: "Cappadocia, Turkey",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 205,
      name: "Water Sports",
      location: "Bali, Indonesia",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1528569449293-fdc35b48952d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 206,
      name: "Hiking Adventure",
      location: "Swiss Alps",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="home-section">
      {/* Summer Deals Section */}
      <section className="deals-section">
        <div className="section-header">
          <h2>Top Summer Deals</h2>
          <div className="navigation-arrows">
            <button onClick={() => scroll(dealsRef, "left")} className="arrow-btn">
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll(dealsRef, "right")} className="arrow-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="deals-container" ref={dealsRef}>
          {summerDeals.map((deal) => (
            <div key={deal.id} className="deal-card">
              <div className="deal-image">
                <img src={deal.image} alt={deal.name} />
              </div>
              <div className="deal-content">
                <h3>{deal.name}</h3>
                <p className="deal-price">From ${deal.price}</p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotels Section */}
      <section className="hotels-section">
        <div className="section-header">
          <h2>Top International Hotels</h2>
          <div className="navigation-arrows">
            <button onClick={() => scroll(hotelsRef, "left")} className="arrow-btn">
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll(hotelsRef, "right")} className="arrow-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="hotels-container" ref={hotelsRef}>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
                <button
                  className="favorite-btn"
                  onClick={() => toggleFavorite(hotel.id)}
                >
                  {favoriteHotels.includes(hotel.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              <div className="hotel-content">
                <h3>{hotel.name}</h3>
                <div className="hotel-stars">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="hotel-location">{hotel.location}</p>
                <div className="hotel-price">
                  <span className="price">${hotel.price}</span>
                  <span className="per-night">/night</span>
                </div>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="section-header">
          <h2>☀️ Must-Try Summer Activities</h2>
          <div className="navigation-arrows">
            <button onClick={() => scroll(activitiesRef, "left")} className="arrow-btn">
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll(activitiesRef, "right")} className="arrow-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="activities-container" ref={activitiesRef}>
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-image">
                <img src={activity.image} alt={activity.name} />
              </div>
              <div className="activity-content">
                <h3>{activity.name}</h3>
                <p>{activity.location}</p>
                <p className="activity-price">From ${activity.price}</p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
