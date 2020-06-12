import React from 'react'
import { Countries } from './Countries'

export const Main = () => {
  return (
    <main className='main'>
      <div className='container'>
        <div className='main__input'>
          <ion-icon name='search-sharp' />
          <input type='text' placeholder='Search for a country...' />
        </div>
        <select className='main__filter' defaultValue='default' name='filter'>
          <option value='default' disabled>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceanía'>Oceanía</option>
        </select>
      </div>
      <Countries />
    </main>
  )
}
