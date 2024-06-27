import React from 'react'
'use client'
import { useState, useEffect } from "react"
function DarkModeSwitcher() {
    const [theme, setTheme] = useState('light')
    useEffect(()=>
    {
      if (theme === 'dark')
        {
          document.documentElement.classList.add('dark')
        }
        else{
          document.documentElement.classList.remove('dark')
        }
    },[theme])
    const handleSwitch= ()=>
  {  
      setTheme(theme === 'light'? 'dark' : 'light')
    }
  return (
    <div className="h-screen dark:bg-black  bg-white  flex justify-center items-center">
    <button onClick={handleSwitch} className="px-6 py-2 dark:bg-white dark:text-black bg-black text-white rounded-2xl">Dark MODE</button>
  </div>

  )
}

export default DarkModeSwitcher