import OurPeople from '../components/OurPeople'
import PracticeAreas from '../components/PracticeAreas'
import Layout from '../layout'
import Landing from '../layout/Landing'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <PracticeAreas />
      <OurPeople/>
    </Layout>
  )
}

export default Home
