import { useEffect, useState } from "react"

function Width(){

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        let handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [width])
    return(
        <>
        <h1>Screen width: {width}</h1>
        </>
    )
}
 export default Width