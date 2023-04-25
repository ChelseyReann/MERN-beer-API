import { useState } from 'react'

function Form (){
    const [form, setForm] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [url, setUrl] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    const handleState = (e) => {
        setState(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm()
    } 

    return (
        <div>
            <h3>Know of a brewery that should be added to this list?</h3>
            <h4>Fill out the form below to get it included!</h4>
                <form>
                    <input type='text' placeholder='Brewery Name' value={name} onChange={handleName}></input><br />
                    <input type='text' placeholder='Brewery Phone Number' value={phone} onChange={handlePhone}></input><br />
                    <input type='text' placeholder='Brewery Website' value={url} onChange={handleUrl}></input><br />
                    <input type='text' placeholder='State' value={state} onChange={handleState}></input><br />
                    <input type='text' placeholder='Country' value={country} onChange={handleCountry}></input><br />
                    <input type='submit' onClick={handleSubmit}></input>
                </form>
        </div>
    )
}

export default Form