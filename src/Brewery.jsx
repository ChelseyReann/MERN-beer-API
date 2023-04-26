import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
//import { useNavigate } from 'react-router-dom'


function Brewery() {
  const [brewery, setBrewery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneRef = useRef()
  //const nav = useNavigate()

const fetchBreweryData = async () => {
    try {
      const res = await axios.get("https://api-project-production-4bae.up.railway.app/beer");
      setBrewery(res.data);
    } catch (error) {
      console.error("Failed to fetch brewery data:", error);
    }
  };

  useEffect(() => {
    fetchBreweryData();
  }, []);

  const prevBrewery = () => {
    if(currentIndex === 0 ){
        setCurrentIndex(brewery.length -1)
    } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1));
    } 
   
  };

  const nextBrewery = () => {
    if(currentIndex === brewery.length -1){
        setCurrentIndex(0)
    } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1));
    }
   
  };

  const handleEdit = async (e) => {
    e.preventDefault()
    const data = {
        phone: phoneRef.current.value
    }
    await axios.put(`https://api-project-production-4bae.up.railway.app/beer/${brewery[currentIndex]._id}`, data)
    phoneRef.current.value = ""
    fetchBreweryData()
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`https://api-project-production-4bae.up.railway.app/beer/${brewery[currentIndex]._id}`)
    //nav("/")
    
  }

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
      <div className="ud-form">
        <p>Update the Brewery's phone # below!</p>
        <form onSubmit={handleEdit}>
            <input type="text" placeholder="New Phone #" ref={phoneRef}></input>
            <input type="submit"></input>
        </form>
        <p>Delete the brewery with the below button</p>
        <form onSubmit={handleDelete}>
            <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Brewery;