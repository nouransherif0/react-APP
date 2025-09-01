import { useState } from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState("flights");
  const [flightType, setFlightType] = useState("oneway");
  const [cabin, setCabin] = useState("Economy");

  // One-way / Round-trip flight passenger state
  const [flightPassengers, setFlightPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [rooms, setRooms] = useState([{ adults: 1, children: 0, infants: 0 }]);
  const [multiTrips, setMultiTrips] = useState([
    { from: "", to: "", depart: "", adults: 1, children: 0, infants: 0 },
  ]);

  const increment = (index, type, arr = "rooms") => {
    if (arr === "rooms") {
      const newRooms = [...rooms];
      newRooms[index][type] += 1;
      setRooms(newRooms);
    } else if (arr === "trips") {
      const newTrips = [...multiTrips];
      newTrips[index][type] += 1;
      setMultiTrips(newTrips);
    } else if (arr === "flight") {
      setFlightPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  const decrement = (index, type, arr = "rooms") => {
    if (arr === "rooms") {
      const newRooms = [...rooms];
      newRooms[index][type] = Math.max(newRooms[index][type] - 1, 0);
      setRooms(newRooms);
    } else if (arr === "trips") {
      const newTrips = [...multiTrips];
      newTrips[index][type] = Math.max(newTrips[index][type] - 1, 0);
      setMultiTrips(newTrips);
    } else if (arr === "flight") {
      setFlightPassengers((prev) => ({
        ...prev,
        [type]: Math.max(prev[type] - 1, 0),
      }));
    }
  };

  const addRoom = () =>
    setRooms([...rooms, { adults: 1, children: 0, infants: 0 }]);
  const removeRoom = (index) =>
    setRooms(rooms.filter((_, i) => i !== index));

  const addTrip = () =>
    setMultiTrips([
      ...multiTrips,
      { from: "", to: "", depart: "", adults: 1, children: 0, infants: 0 },
    ]);
  const removeTrip = (index) =>
    setMultiTrips(multiTrips.filter((_, i) => i !== index));

  return (
    <div className="searchbox-wrapper">
      {/* Tabs */}
      <div className="search-tabs">
        {[
          { key: "flights", icon: <FaPlane />, label: "Flights" },
          { key: "hotels", icon: <FaHotel />, label: "Hotels" },
          { key: "tours", icon: <FaMapMarkedAlt />, label: "Tours" },
        ].map((tab) => (
          <div
            key={tab.key}
            className={`tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <div className="tab-icon-wrapper">{tab.icon}</div>
            <span className="tab-text">{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Search Container */}
      <div className="search-container">
        <div className="search-box">
          {/* Flights */}
          {activeTab === "flights" && (
            <div className="flight-search">
              <div className="flight-type-text">
                {["oneway", "round", "multi"].map((type) => (
                  <span
                    key={type}
                    className={flightType === type ? "active" : ""}
                    onClick={() => setFlightType(type)}
                  >
                    {type === "oneway"
                      ? "One-way"
                      : type === "round"
                      ? "Round-trip"
                      : "Multi-city"}
                  </span>
                ))}
              </div>

              {/* Inputs */}
              {flightType === "multi" ? (
                <div className="multi-trips">
                  {multiTrips.map((trip, index) => (
                    <div key={index} className="trip-row">
                      <input
                        type="text"
                        placeholder="From"
                        value={trip.from}
                        onChange={(e) =>
                          setMultiTrips((prev) => {
                            const copy = [...prev];
                            copy[index].from = e.target.value;
                            return copy;
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="To"
                        value={trip.to}
                        onChange={(e) =>
                          setMultiTrips((prev) => {
                            const copy = [...prev];
                            copy[index].to = e.target.value;
                            return copy;
                          })
                        }
                      />
                      <input
                        type="date"
                        value={trip.depart}
                        onChange={(e) =>
                          setMultiTrips((prev) => {
                            const copy = [...prev];
                            copy[index].depart = e.target.value;
                            return copy;
                          })
                        }
                      />
                      <div className="trip-passengers">
                        {["adults", "children", "infants"].map((type) => (
                          <div className="passenger" key={type}>
                            <span>
                              {type === "adults"
                                ? "Adults (12+)"
                                : type === "children"
                                ? "Children (2-11)"
                                : "Infants (0-2)"}
                            </span>
                            <div className="counter">
                              <button
                                onClick={() => decrement(index, type, "trips")}
                              >
                                -
                              </button>
                              <span>{trip[type]}</span>
                              <button
                                onClick={() => increment(index, type, "trips")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <span
                        className="remove-trip"
                        onClick={() => removeTrip(index)}
                      >
                        &times;
                      </span>
                    </div>
                  ))}
                  <button className="add-trip-btn" onClick={addTrip}>
                    + Add Trip
                  </button>
                </div>
              ) : (
                <div className="inputs-row">
                  <input type="text" placeholder="Origin" />
                  <input type="text" placeholder="Destination" />
                  <input type="date" placeholder="Departure" />
                  {flightType === "round" && <input type="date" placeholder="Return" />}

                  {/* One-way/Round passenger counters */}
                  <div className="trip-passengers">
                    {["adults", "children", "infants"].map((type) => (
                      <div className="passenger" key={type}>
                        <span>
                          {type === "adults"
                            ? "Adults (12+)"
                            : type === "children"
                            ? "Children (2-11)"
                            : "Infants (0-2)"}
                        </span>
                        <div className="counter">
                          <button onClick={() => decrement(null, type, "flight")}>
                            -
                          </button>
                          <span>{flightPassengers[type]}</span>
                          <button onClick={() => increment(null, type, "flight")}>
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cabin Selector */}
              <div className="cabin-selector-container">
                <span className="cabin-selector-label">Cabin Class:</span>
                <div className="cabin-selector-left">
                  {["Economy", "Premium Economy", "Business", "First"].map((c) => (
                    <div
                      key={c}
                      className={`cabin-option ${cabin === c ? "selected" : ""}`}
                      onClick={() => setCabin(c)}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <button className="search-btn-luxury">Search Flights</button>
            </div>
          )}

          {/* Hotels */}
          {activeTab === "hotels" && (
            <div className="hotel-search">
              <input type="text" placeholder="City or Hotel" />
              {rooms.map((room, index) => (
                <div key={index} className="room-counter-luxury">
                  <div className="room-header">
                    <span>Room {index + 1}</span>
                    <span className="remove-room" onClick={() => removeRoom(index)}>
                      &times;
                    </span>
                  </div>
                  <div className="room-passengers">
                    {["adults", "children", "infants"].map((type) => (
                      <div className="passenger" key={type}>
                        <span>
                          {type === "adults"
                            ? "Adults (12+)"
                            : type === "children"
                            ? "Children (2-11)"
                            : "Infants (0-2)"}
                        </span>
                        <div className="counter">
                          <button onClick={() => decrement(index, type)}>-</button>
                          <span>{room[type]}</span>
                          <button onClick={() => increment(index, type)}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="add-room-btn" onClick={addRoom}>
                + Add Room
              </button>
              <button className="search-btn-luxury">Search Hotels</button>
            </div>
          )}

          {/* Tours */}
          {activeTab === "tours" && (
            <div className="tour-search">
              <input className="tour-input-wide" type="text" placeholder="Tour Destination" />
              <button className="search-btn-luxury">Search Tours</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
