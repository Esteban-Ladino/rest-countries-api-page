import React from 'react'

export const Header = ({ darkMode, handleClick }) => {
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='header__title'>Where in the world?</h1>
        <div className='header__button' onClick={handleClick}>
          <ion-icon name={`moon-${darkMode ? 'sharp' : 'outline'}`} />
          <span> Dark Mode</span>
        </div>
      </div>
    </header>
  )
}
