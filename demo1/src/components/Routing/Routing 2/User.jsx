import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const params = useParams()
  return (
    <div>
      <div>Hello {params.username}</div>
    </div>
  )
}

export default User