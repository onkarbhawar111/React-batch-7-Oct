import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }
  return (
    <div>
      <h3>ABOUT PAGE</h3>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default About