import { useState,useRef } from 'react'
import axios from 'axios'

function Form (){
    const nameRef = useRef()
    const phoneRef = useRef()
    const urlRef = useRef()
    const stateRef = useRef()
    const countryRef = useRef()
    const [message, setMessage] = useState('') 

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { 
            name: nameRef.current.value ,
            phone: phoneRef.current.value,
            website_url: urlRef.current.value,
            state_province: stateRef.current.value,
            country: countryRef.current.value,
        }
        await axios.post("https://api-project-production-4bae.up.railway.app/beer/${brewery[currentIndex]_id}", data)
        setMessage("Thank you!")
        nameRef.current.value = ""
        phoneRef.current.value = ""
        urlRef.current.value = ""
        stateRef.current.value = ""
        countryRef.current.value = ""
    } 

    return (
        <div>
            <h3>Know of a brewery that should be added to this list?</h3>
            <h4>Fill out the form below to get it included!</h4>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Brewery Name' 
                        ref={nameRef}>
                    </input><br />
                    <input 
                        type='text' 
                        placeholder='Brewery Phone Number' 
                        ref={phoneRef}>
                    </input><br />
                    <input 
                        type='text' 
                        placeholder='Brewery Website' 
                        ref={urlRef}>
                    </input><br />
                    <input 
                        type='text' 
                        placeholder='State' 
                        ref={stateRef}>
                    </input><br />
                    <input 
                        type='text' 
                        placeholder='Country' 
                        ref={countryRef}>
                    </input><br />
                    <input type='submit'></input>
                </form>
                <p>{message}</p>
        </div>
    )
}

export default Form