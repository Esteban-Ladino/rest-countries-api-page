import React from 'react'
import { Layout } from '../components/Layout'
import { Home } from '../containers/Home'
import '../styles/App.scss'

export const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
