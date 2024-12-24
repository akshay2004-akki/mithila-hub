import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import Feedback from "./components/Feedback"
import About from "./components/About"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Saree from "./components/Saree"
import Chunri from "./components/Chunri"
import BedSheet from "./components/BedSheet"
import Canvas from "./components/Canvas"
import Custom from "./components/Custom"
import Admin from "./components/Admin"

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
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/category/:category" element={<Saree/>} />
          <Route path="/category/:chunri" element={<Chunri/>} />
          <Route path="/category/:bedsheet" element={<BedSheet/>} />
          <Route path="/category/:canvas" element={<Canvas/>} />
          <Route path="/custom" element={<Custom/>} />
          <Route path="/profile" element={<Admin/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
