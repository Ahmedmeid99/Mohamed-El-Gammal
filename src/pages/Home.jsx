import LegalOpinions from '../components/LegalOpinions'
import OurPeople from '../components/OurPeople'
import OurValuedClients from '../components/OurValuedClients'
import PracticeAreas from '../components/PracticeAreas'
import Testimonials from '../components/Testimonials'
import Layout from '../layout'
import Landing from '../layout/Landing'
import OurFirm from '../components/OurFirm'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <PracticeAreas />
      <OurPeople />
      <OurValuedClients />
      <LegalOpinions />
      <Testimonials />
      <OurFirm />
      <ContactUs />
    </Layout>
  )
}

export default Home
