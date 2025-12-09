import React, { useState } from 'react'

const InputComp = ({input, handleChange}) => {    

  return <input type="text" onChange={handleChange}  />
}

export default InputComp