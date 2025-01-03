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
import Custom from "./components/Custom"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Category from "./Category"
import { useState } from "react"
import Profile from "./components/Profile"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
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
          <Route path="/category/:category" element={<Category/>} />
          <Route path="/custom" element={<Custom/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
