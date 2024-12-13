import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <>
      <div className="w-full fixed z-[9999] font-sans bg-beige text-gray-900">
        {/* Header */}
        <header className="bg-white py-3 shadow-lg">
          <div className="flex justify-between mx-6 items-center">
            <div className="text-2xl font-serif text-black font-thin flex">
              <img src={logo} className="h-[60px] w-[60px] rounded-full" />
              <div className="ml-3 text-sm flex flex-col justify-center">
                <span>Mamta Das</span>
                <span className="text-[27px] font-extrabold">Mithila</span>
              </div>
            </div>
            <nav>
              <ul className="hidden space-x-8 text-[18px] sm:flex">
                <li>
                  <Link to="/" className="text-black 
                  transition-colors duration-300  hover:text-gold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-black 
                  transition-colors duration-300  hover:text-gold">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-black 
                  transition-colors duration-300  hover:text-gold">
                    About Us
                  </Link>
                </li>
                <li className="text-black
                transition-colors duration-300  hover:text-gold">
                  <button onClick={() => setToggle3((prev) => !prev)}>
                    Categories
                  </button>
                </li>
                <li>
                  {" "}
                  <Link to="/contact" className="text-black
                  transition-colors duration-300  hover:text-gold">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div
                className={`absolute right-[150px] py-2 px-4 bg-black flex flex-col top-16 rounded text-black ${
                  toggle3 ? "block" : "hidden"
                }`}
              >
                <button onClick={() => setToggle3((prev) => !prev)}>
                  <i className="fa-solid fa-x absolute right-2 text-white"></i>
                </button>
                <Link
                  to="/sarees"
                  className="py-3 text-slate-500 hover:text-white"
                >
                  Saree
                </Link>
                <Link
                  to="/chunri"
                  className="py-3 text-slate-500 hover:text-white"
                >
                  Chunari
                </Link>
                <Link
                  to="/bedsheet"
                  className="py-3 text-slate-500 hover:text-white"
                >
                  Bed Sheet
                </Link>
                <Link
                  to="/canvas"
                  className="py-3 text-slate-500 hover:text-white"
                >
                  Canvas
                </Link>
                <Link
                  to="/custom"
                  className="py-3 text-[15px] text-slate-500 hover:text-white"
                >
                  Customization
                </Link>
              </div>

              <div className="block sm:hidden">
                <button
                  onClick={() => setToggle((prev) =>!prev)}
                  className="font-bold text-black text-2xl transition-all duration-300"
                >
                  <i
                    className={`fa-solid ${
                      toggle ? "fa-x rotate-180" : "fa-bars rotate-0"
                    } transition-transform duration-300`}
                  ></i>
                </button>
              </div>
              <div
                className={`z-10 absolute py-2 px-4 rounded right-6 bg-black flex flex-col ${
                  toggle ? "block " : "hidden"
                }`}
              >
                <Link to="/" className="text-white transition-colors duration-300  hover:text-gold p-2">
                  Home
                </Link>
                <Link to="/gallery" className="text-white transition-colors duration-300 hover:text-gold p-2">
                  Gallery
                </Link>
                <Link to="/about" className="text-white 
                transition-colors duration-300  hover:text-gold p-2">
                  About Us
                </Link>
                <button
                  className="text-white
                  transition-colors duration-300  hover:text-gold peer p-2"
                  onClick={() => setToggle2((prev) => !prev)}
                >
                  Categories
                </button>
                <Link to="/contact" className="text-white 
                transition-colors duration-300  hover:text-gold p-2">
                  Contact Us
                </Link>
              </div>
              <div
                className={`absolute right-[150px] py-2 px-4 bg-black flex flex-col sm:hidden top-48 rounded ${
                  toggle2 ? "block" : "hidden"
                }`}
              >
                <button onClick={() => setToggle2((prev) => !prev)}>
                  <i className="fa-solid fa-x absolute right-2 text-white"></i>
                </button>
                <Link
                  to="/sarees"
                  className="py-3 text-slate-300 hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                >
                  Saree
                </Link>
                <Link
                  to="/chunri"
                  className="py-3 text-slate-300 hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                >
                  Chunari
                </Link>
                <Link
                  to="/bedsheet"
                  className="py-3 text-slate-300 hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                >
                  Bed Sheet
                </Link>
                <Link
                  to="/canvas"
                  className="py-3 text-slate-300 hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                >
                  Canvas
                </Link>
                <Link
                  to="/custom"
                  className="py-3 text-[15px] text-slate-300 hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    setToggle2(false);
                    setToggle3(false);
                  }}
                >
                  Customization
                </Link>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
