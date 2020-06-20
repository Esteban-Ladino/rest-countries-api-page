import React from 'react'
import { Main } from '../components/Main'

export const Home = ({ data, handleSearch, handleFilter }) =>
  <Main data={data} handleSearch={handleSearch} handleFilter={handleFilter} />
