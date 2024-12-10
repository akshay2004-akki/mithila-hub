import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
        <div className="w-full font-sans bg-beige text-gray-900">
            {/* Header */}
            <header className="bg-maroon px-3 py-5 shadow-lg">
                <div className="flex justify-between mx-6 items-center">
                    <div className="text-2xl font-serif text-white font-thin">Mithila Creations</div>
                    <nav>
                        <ul className="hidden space-x-8 text-[18px] sm:flex">
                            <li><Link to="/" className="text-white hover:text-gold">Home</Link></li>
                            <li><Link to="/gallery" className="text-white hover:text-gold">Gallery</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gold">About Us</Link></li>
                            <li> <Link to="/contact" className="text-white hover:text-gold">Contact Us</Link></li>
                        </ul>
                        <div className="block sm:hidden">
                            <button onClick={()=>setToggle(prev=>!prev)} className='font-bold text-white text-2xl transition'><i className={`${toggle ? "fa-solid fa-x" : "fa-solid fa-bars"}`}></i></button>
                        </div>
                        <div className={`z-10 absolute py-2 px-4 rounded right-6 bg-black flex flex-col ${toggle ? "block " : "hidden"}`}>
                            <Link to="/" className="text-white hover:text-gold p-2">Home</Link>
                            <Link to="/gallery" className="text-white hover:text-gold p-2">Gallery</Link>
                            <Link to="/about" className="text-white hover:text-gold p-2">About Us</Link>
                            <Link to="/contact" className="text-white hover:text-gold p-2">Contact Us</Link>
                        </div>

                    </nav>
                </div>
            </header>

            
        </div>
    </>
  )
}

export default Navbar