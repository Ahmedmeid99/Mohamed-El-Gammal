import LegalOpinions from '../components/LegalOpinions'
import OurPeople from '../components/OurPeople'
import OurValuedClients from '../components/OurValuedClients'
import PracticeAreas from '../components/PracticeAreas'
import Layout from '../layout'
import Landing from '../layout/Landing'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <PracticeAreas />
      <OurPeople/>
      <OurValuedClients/>
      <LegalOpinions/>
    </Layout>
  )
}

export default Home
