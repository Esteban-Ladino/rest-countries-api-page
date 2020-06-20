/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Home } from '../containers/Home'
import { Router } from '@reach/router'
import '../styles/App.scss'
import { CountryDetail } from '../containers/CountryDetail'
import { NotFound } from '../containers/NotFound'

export const App = () => {
  const [data, setData] = useState([])
  const api = 'https://restcountries.eu/rest/v2'

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = () => {
    fetch(`${api}/all`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }

  const searchCountry = (event) => {
    if (event.target.value === '') {
      getAllCountries()
      return
    }
    fetch(`${api}/name/${event.target.value}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }

  const filterByRegion = (event) => {
    fetch(`${api}/region/${event.target.value}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }

  const getCountry = (name) => {
    return fetch(`${api}/name/${name}?fullText=true`)
      .then(response => response.json())
      .then(data => data[0])
      .catch(error => console.error(error))
  }

  const getBorders = (borders) => {
    return fetch(`${api}/alpha?codes=${borders.join(';')}`)
      .then(response => response.json())
      .then(data => data.map(country => country.name))
  }

  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path='/' data={data} handleSearch={searchCountry} handleFilter={filterByRegion} />
        <CountryDetail path='/detail/:name' getCountry={getCountry} getBorders={getBorders} />
      </Router>
    </Layout>
  )
}
