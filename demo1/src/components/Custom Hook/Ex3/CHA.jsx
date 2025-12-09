import React, { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [data, setData] = useState(initialValue)

    function toggle(){
        setData(prev => !prev)
    }


  return [data, toggle]
}

export default useToggle