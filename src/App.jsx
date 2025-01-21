import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Route, //select the path and eny component will render
  Routes, // never render two component in the same time onley the first path
} from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const ContactUs = React.lazy(() => import('./pages/ContactUs'))
const OurPeople = React.lazy(() => import('./pages/OurPeople'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loading_component">
            {/* <Spinner animation="border" size="sm" /> */}
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-people" element={<OurPeople />} />

          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
