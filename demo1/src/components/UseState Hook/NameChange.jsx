import { useState } from "react"

function NameChange(){
    const [name, setName] = useState('Onkar')
    function handleClick(){
        name === 'Onkar' ? setName("Bhawar") : setName('Onkar')
    }
    return(
        <>
        <div>{name}</div>
        <button onClick={handleClick}>Change name</button>
        </>
    )
}

export default NameChange