import { useEffect,useState } from "react"

function Brewery (){

    const [brewery, setBrewery] = useState('')

    useEffect(() =>{
        fetch("https://api-project-production-4bae.up.railway.app/beer")
        .then((res) => res.json())
        .then((data) =>{
            setBrewery(data)
        })
        .catch((error) => {
            console.error("Failed to fetch book data:", error)
        })
    },[])

    return(
        <div>
            <h1>Breweries</h1>
            <p>{brewery.name}</p>
        </div>
    )
}

export default Brewery