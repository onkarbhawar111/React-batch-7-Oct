import React, { useCallback, useState } from 'react'
import Ex2 from './Ex2'

const Ex1 = () => {
    const [count, setCount] = useState(0)

    const f1 = useCallback(() =>{
            console.log('fn called')
        }, [])
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <Ex2 f1={f1} />
    </div>
  )
}

export default Ex1