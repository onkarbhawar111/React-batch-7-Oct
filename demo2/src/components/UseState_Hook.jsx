import { useState } from "react"

function UseState_Hook(){

    const [count, setCount] = useState(100) //count = 0 

    return(
        <>
           <div>Count: {count}</div>
           <button onClick={()=>{setCount(count+1)}}>+</button> 
        </>    //count=count+1
    )
};

export default UseState_Hook