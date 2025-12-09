import React from 'react'
import Child from './Child'

const Parent = () => {
    function getData(msg){
        alert(msg)
    }
  return (
    <div>
        <Child getData={getData} />
    </div>
  )
}

export default Parent