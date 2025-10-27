import { useState } from "react"

function NameChange(){
    const [name, setName] = useState('Onkar')
    function handleClick(){
        name === 'Onkar' ? setName("Bhawar") : setName('Onkar')
    }
    console.log('2nd component rendered....');
    return(
        <>
        <div>{name}</div>
        <button onClick={handleClick}>Change name</button>
        </>
    )
}

export default NameChange