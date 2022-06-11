import type { NextPage } from 'next'
import MainLayout from 'layout/MainLayout'
import HomeContainer from '/containers/HomeContainer'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeContainer />
    </MainLayout>
  )
}

export default Home
