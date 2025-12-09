import React, { useRef } from 'react'

const Ex3 = () => {
    let inputRef = useRef()

    console.log('comp re-rendered....')
    function handleClick(){
        inputRef.current.style.color = 'red'
    }

  return (
    <div>
        <div ref={inputRef}>Onkar</div>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Ex3