import React, { useState } from 'react'
import InputComp from './InputComp'
import DisplayComp from './DisplayComp'

const Parent = () => {

  const [input, setInput] = useState('')

  function handleChange(e){
        setInput(e.target.value)
    }

  return (
    <div>
        <InputComp input={input} handleChange={handleChange} />
        <DisplayComp text={input} />
    </div>
  )
}

export default Parent