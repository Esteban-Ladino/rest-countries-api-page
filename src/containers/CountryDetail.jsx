import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'

export const CountryDetail = ({ name, getCountry, getBorders }) => {
  const [country, setCountry] = useState({})
  const [borders, setBorders] = useState([])

  useEffect(() => {
    getCountry(name)
      .then(country => {
        setCountry(country)
        getBorders(country.borders)
          .then(borders => setBorders(borders))
          .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='countryDetail'>
      <div className='container'>
        <Link className='countryDetail__backLink' to='/'><ion-icon name='arrow-back-outline' />Back</Link>
        <div className='countryDetail__body'>
          <figure className='countryDetail__image'><img src={country.flag} alt='' /></figure>
          <div className='countryDetail__details'>
            <h1>{country.name}</h1>
            <div className='columns'>
              <div className='column'>
                <p><strong>NativeName: </strong>{country.nativeName}</p>
                <p><strong>Population: </strong>{new Intl.NumberFormat().format(country.population)}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Sub Region: </strong>{country.subregion}</p>
                <p><strong>Capital: </strong>{country.capital}</p>
              </div>
              <div className='column'>
                <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
                <p>
                  <strong>Currencies: </strong>
                  {country.currencies
                    ? country.currencies.map(currency => currency.name).join(', ')
                    : 'loading...'}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {country.languages
                    ? country.languages.map(language => language.name).join(', ')
                    : 'loading...'}
                </p>
              </div>
              <p className='border'>
                <strong>Border Countries: </strong>
                <div className='countryDetail__borderCountries'>
                  {borders === []
                    ? borders.map(borderCountry => <div key={borderCountry} className='borderCountry'>{borderCountry}</div>)
                    : 'This country has no border countries.'}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
