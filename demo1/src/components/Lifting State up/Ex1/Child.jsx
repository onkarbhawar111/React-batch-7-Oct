import React, { useState } from 'react'

const Child = ({getData}) => {
    const [fname, setFname] = useState('Onkar')
    function handleClick(){
        getData(fname)
    }
  return (
    <div>
        <button onClick={handleClick}>Click me for alert</button>
    </div>
  )
}

export default Child