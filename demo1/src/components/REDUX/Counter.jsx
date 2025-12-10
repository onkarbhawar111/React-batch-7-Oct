import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

export function Counter() {

    const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br /> <br />
      <button onClick={()=>dispatch(reset())}>RESET</button> <br /><br />   
        <input type="text" onChange={e => setAmount(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(amount))}>Add amount</button>
      </div>
    </div>
  )
}