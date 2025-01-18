import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Route, //select the path and eny component will render
  Routes, // never render two component in the same time onley the first path
} from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

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
          <Route path="/About" element={<p>about</p>} />

          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
