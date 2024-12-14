import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import Feedback from "./components/Feedback"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Hero/>
              <Products/>
              <Reviews/>
              <Feedback/>
            </>
        }/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
