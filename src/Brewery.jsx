import React, { useEffect, useState } from "react";
import axios from "axios";

function Brewery() {
  const [brewery, setBrewery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

const fetchBreweryData = async () => {
    try {
      const res = await fetch("https://api-project-production-4bae.up.railway.app/beer");
      const data = await res.json();
      setBrewery(data);
    } catch (error) {
      console.error("Failed to fetch brewery data:", error);
    }
  };

  useEffect(() => {
    fetchBreweryData();
  }, []);

  const prevBrewery = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  };

  const nextBrewery = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  return (
    <div>
      {brewery.length > 0  && (
        <div className="brewery-container">
            <button onClick={prevBrewery}>Prev</button>
          <div className="brewery-display">
                <p>{brewery[currentIndex].name}</p>
                <p>{brewery[currentIndex].phone}</p>
                <p>{brewery[currentIndex].website_url}</p>
                <p>{brewery[currentIndex].state_province}</p>
                <p>{brewery[currentIndex].country}</p>
              </div>
            <button onClick={nextBrewery}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Brewery;