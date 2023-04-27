import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
//import { useNavigate } from 'react-router-dom'


function Brewery() {
  const [brewery, setBrewery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nameRef = useRef()
    const phoneRef = useRef()
    const urlRef = useRef()
    const stateRef = useRef()
    const countryRef = useRef()
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
        name: nameRef.current.value ,
        phone: phoneRef.current.value,
        website_url: urlRef.current.value,
        state_province: stateRef.current.value,
        country: countryRef.current.value,    }
    await axios.put(`https://api-project-production-4bae.up.railway.app/beer/${brewery[currentIndex]._id}`, data)
        nameRef.current.value = ""
        phoneRef.current.value = ""
        urlRef.current.value = ""
        stateRef.current.value = ""
        countryRef.current.value = ""
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
      <div className="u-form">
        <p>Notice some out of date info?< br/>
        Update the brewery info below!</p>
        <form onSubmit={handleEdit}>
             <input  
                placeholder='Brewery Name' 
                ref={nameRef}>
                </input><br />
                <input 
                    placeholder='Phone Number' 
                    ref={phoneRef}>
                </input><br />
                <input  
                    placeholder='Website' 
                    ref={urlRef}>
                </input><br />
                <input  
                    placeholder='State' 
                    ref={stateRef}>
                </input><br />
                <input 
                    placeholder='Country' 
                    ref={countryRef}>
                </input><br />
            <input type="submit" className="mysubmitbutton" value={"Update"}></input>
        </form>    
        </div>
        <div className="d-form">
        <p className="d">Is this brewery shut down? < br/>
            Delete it with the button below!</p>
        <form onSubmit={handleDelete}>
            <input type="submit" className="mysubmitbutton" value={"Delete"}></input>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Brewery;