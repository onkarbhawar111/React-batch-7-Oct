import { useState } from "react"

function ObjectEx(){

    const [person, setPerson]  = useState({
        name: 'Onkar',
        city: "Pune",
        gender: 'male'
    })

    function handleClick(){
        setPerson({...person, city: "Mumbai"})    }

    return(
        <>
        <div>
            <h2>Name: {person.name}</h2>
            <h2>City: {person.city}</h2>
            <p>gender: {person.gender}</p>
        </div>
        <button onClick={handleClick}>Change City</button>
        </>
    )
}
export default ObjectEx