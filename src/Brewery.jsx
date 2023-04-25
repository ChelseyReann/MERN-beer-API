import React, { useEffect, useState } from "react";

function Brewery() {
  const [brewery, setBrewery] = useState([]);

  useEffect(() => {
    fetch("https://api-project-production-4bae.up.railway.app/beer")
      .then((res) => res.json())
      .then((data) => {
        setBrewery(data);
      })
      .catch((error) => {
        console.error("Failed to fetch book data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Breweries</h1>
      <div className="brewery-container">
        {brewery && (
          <div className="brewery-grid">
            {brewery.map((brewery, index) => (
              <div key={index} className="brewery-display">
                <p>{brewery.name}</p>
                <p>{brewery.phone}</p>
                <p>{brewery.website_url}</p>
                <p>{brewery.state_province}</p>
                <p>{brewery.country}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Brewery;