import React from 'react'
import { Countries } from './Countries'

export const Main = ({ data, handleSearch, handleFilter }) => {
  return (
    <main className='main'>
      <div className='container'>
        <div className='main__input'>
          <ion-icon name='search-sharp' />
          <input type='text' placeholder='Search for a country...' onChange={handleSearch} />
        </div>
        <select className='main__filter' defaultValue='default' name='filter' onChange={handleFilter}>
          <option value='default' className='filter__option--disabled'>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='americas'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceanía</option>
        </select>
      </div>
      <Countries data={data} />
    </main>
  )
}
