import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [params] = useSearchParams()

  const cat = params.get('category')
  const p = params.get('price')
  return (
    <>
      <div>Contact Page</div>
      <h2>Category: {cat}</h2>
      <h2>Price: {p}</h2>
    </>
  )
}

export default Contact