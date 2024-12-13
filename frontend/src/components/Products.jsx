/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const saree = [
    {
      id: 1,
      name: "Product 1",
      price: "$25",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$45",
      img: "https://via.placeholder.com/150",
    },
  ];

  const bedsheet = [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$35",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$50",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-12 px-3 md:px-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="relative text-3xl font-bold font-poppins text-center mb-12 before:content-['What_We_Sell'] before:absolute before:text-maroon before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]">
          <span className="relative z-10 bg-gray-100 px-4">Our Products</span>
          <span className="absolute inset-0 flex items-center">
            <span className="flex-1 w-10 h-[2px] bg-gray-600"></span>
            <span className="flex-1 w-10 h-[2px] bg-gray-600"></span>
          </span>
        </h2>

        {/* Saree Section */}
        <div className="mb-12">
          <h2 className="flex items-center justify-between text-center mb-8 text-2xl sm:text-3xl font-semibold font-poppins">
            <span className="text-xl sm:text-3xl text-gray-800 tracking-wide">
              Saree
            </span>
            <span className="text-sm sm:text-lg text-blue-500 underline decoration-2 hover:text-blue-600 transition-colors">
              <Link to="/sarees">View All</Link>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {saree.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all md:hover:scale-[1.06] duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">Price : {product.price}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-maroon text-white font-medium rounded-md hover:bg-green-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
            <hr className="h-1 bg-black" />
            <br />
        {/* Bed Sheet Section */}
        <div className="mb-12">
        <h2 className="flex items-center justify-between text-center mb-8 text-2xl sm:text-3xl font-semibold font-poppins">
            <span className="text-xl sm:text-3xl text-gray-800 tracking-wide">
              Bed Sheet
            </span>
            <span className="text-sm sm:text-lg text-blue-500 underline decoration-2 hover:text-blue-600 transition-colors">
              <Link to="/bedsheet">View All</Link>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {bedsheet.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-all md:hover:scale-[1.06] hover:shadow-2xl  duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">Price : {product.price}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-maroon text-white font-medium rounded-md hover:bg-green-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="h-1 bg-black" />
            <br />

        {/* Canvas section */}
        <div className="mb-12">
        <h2 className="flex items-center justify-between text-center mb-8 text-2xl sm:text-3xl font-semibold font-poppins">
            <span className="text-xl sm:text-3xl text-gray-800 tracking-wide">
              Canvas
            </span>
            <span className="text-sm sm:text-lg text-blue-500 underline decoration-2 hover:text-blue-600 transition-colors">
              <Link to="/canvas">View All</Link>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {saree.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all md:hover:scale-[1.06] duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">Price : {product.price}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-maroon text-white font-medium rounded-md hover:bg-green-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="h-1 bg-black" />
            <br />

        <div>
        <h2 className="flex items-center justify-between text-center mb-8 text-2xl sm:text-3xl font-semibold font-poppins">
            <span className="text-xl sm:text-3xl text-gray-800 tracking-wide">
              Chunri (Chunni)
            </span>
            <span className="text-sm sm:text-lg text-blue-500 underline decoration-2 hover:text-blue-600 transition-colors">
              <Link to="/canvas">View All</Link>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {saree.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all md:hover:scale-[1.06] duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">Price : {product.price}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-maroon text-white font-medium rounded-md hover:bg-green-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
