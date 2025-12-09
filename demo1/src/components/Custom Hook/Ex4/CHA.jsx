import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {//key='username, initialValue=''

    const [value, setValue]= useState(()=>{
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : initialValue
    })

    const setStoredValue = (newValue) =>{ 
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

  return {value, setStoredValue}
}

export default useLocalStorage