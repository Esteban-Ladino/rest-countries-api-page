import React, { useState } from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const changeTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} handleClick={changeTheme} />
      {children}
    </div>
  )
}
