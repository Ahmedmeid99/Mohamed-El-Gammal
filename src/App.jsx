import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Route, //select the path and eny component will render
  Routes, // never render two component in the same time onley the first path
} from 'react-router-dom'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'))
const OurPeoplePage = React.lazy(() => import('./pages/OurPeoplePage'))

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
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-people" element={<OurPeoplePage />} />

          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
