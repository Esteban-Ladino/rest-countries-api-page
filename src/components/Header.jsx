import React from 'react'
import { Link } from '@reach/router'

export const Header = ({ darkMode, handleClick }) => {
  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <h1 className='header__title'>Where in the world?</h1>
        </Link>
        <p className='header__button' onClick={handleClick}>
          <ion-icon name={`moon-${darkMode ? 'sharp' : 'outline'}`} />
          <span> Dark Mode</span>
        </p>
      </div>
    </header>
  )
}
