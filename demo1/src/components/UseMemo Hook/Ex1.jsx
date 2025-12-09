import React, { useState , useMemo} from 'react'

const Ex1 = () => {
const [count, setCount] = useState(0)
const [input, setInput] = useState(10)
const expTask = (num) => {
    console.log('fn called...')
    for(let i=0 ; i < 1000000000 ; i++){}
    return num * 2;
}

// let double = expTask(input)
const double = useMemo(()=>(
     expTask(input)
), [input])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Add</button> <br /><br />
        <input type="number" onChange={(e)=>setInput(e.target.value)} />
        <div>Double: {double}</div>
    </div>
  )
}

export default Ex1



