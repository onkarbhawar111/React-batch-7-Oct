import React from 'react'
import useToggle from './CHA'

const CHB = () => {
    const [input, toggle] = useToggle()

  return (
    <div>
        <button onClick={toggle}>{input == true ? 'Hide' : 'Show'}Text</button>
        {input && <p>Text is visible !!!</p>}
    </div>
  )
}

export default CHB