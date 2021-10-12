import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Traveltypes } from '../components/Traveltypes'

const Home: NextPage = () => {
  return (
   <>
      <Header />
      <Banner />
      <Traveltypes />
   </>
  )
}

export default Home
