/* eslint-disable no-unused-vars */
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
