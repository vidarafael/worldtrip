import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Traveltypes } from '../components/Traveltypes'
import { Slide } from '../components/Slide'

const Home: NextPage = () => {
  return (
   <>
      <Header />
      <Banner />
      <Traveltypes />
      <Slide />
   </>
  )
}

export default Home
