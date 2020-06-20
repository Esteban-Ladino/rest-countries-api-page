import React from 'react'
import { Country } from './Country'

export const Countries = ({ data }) => {
  return (
    <div className='countries container'>
      {data.length
        ? data.map(country => {
          return (
            <Country
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          )
        })
        : 'No country found...'}
    </div>
  )
}
