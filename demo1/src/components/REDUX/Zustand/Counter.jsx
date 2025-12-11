import React from 'react'
import useStore from './useStore.jsx'

const Counter = () => {
    const {count, inc, dec, reset} = useStore()
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter