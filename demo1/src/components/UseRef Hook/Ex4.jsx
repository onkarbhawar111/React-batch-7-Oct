import React, { useRef } from 'react'

const Ex4 = () => {
    console.log('comp rendered...')

    const refEle = useRef()

    function handleClick(){
        refEle.current.focus()
    }

  return (
    <div>
        <input type="text" />
        <input ref={refEle} type="text" />
        <button onClick={handleClick}>Change Focus</button>
    </div>
  )
}

export default Ex4