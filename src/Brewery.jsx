import React, { useEffect, useState } from "react";

function Brewery() {
  const [brewery, setBrewery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api-project-production-4bae.up.railway.app/beer")
      .then((res) => res.json())
      .then((data) => {
        setBrewery(data);
      })
      .catch((error) => {
        console.error("Failed to fetch brewery data:", error);
      });
  }, []);

  const prevBrewery = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  };

  const nextBrewery = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  return (
    <div>
      <h1>Breweries</h1>
      {brewery  && (
        <div className="brewery-container">
          <div className="brewery-display">
                <p>{brewery[currentIndex].name}</p>
                <p>{brewery[currentIndex].phone}</p>
                <p>{brewery[currentIndex].website_url}</p>
                <p>{brewery[currentIndex].state_province}</p>
                <p>{brewery[currentIndex].country}</p>
              </div>
          <div className="brewery-controls">
            <button onClick={prevBrewery}>Prev</button>
            <button onClick={nextBrewery}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Brewery;