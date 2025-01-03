/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
function Gallery() {
    // const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const fetchGallery = async()=>{
        try {
          const response = await axios.get("http://localhost:5000/api/v1/gallery/", {withCredentials:true})
          setLoading(false)
          console.log(response.data.data);
          
        } catch (error) {
          console.log(error.message);
          
        }
      }
      fetchGallery();
    },[])

  
  const products = [
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
    {
        id: 12,
        name: "Product 1",
        price: "$25",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 22,
        name: "Product 2",
        price: "$30",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 32,
        name: "Product 3",
        price: "$45",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 21,
        name: "Product 1",
        price: "$25",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 42,
        name: "Product 2",
        price: "$30",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 93,
        name: "Product 3",
        price: "$45",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 41,
        name: "Product 1",
        price: "$25",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 62,
        name: "Product 2",
        price: "$30",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 73,
        name: "Product 3",
        price: "$45",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 31,
        name: "Product 1",
        price: "$25",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 52,
        name: "Product 2",
        price: "$30",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 38,
        name: "Product 3",
        price: "$45",
        img: "https://via.placeholder.com/150",
      },
  ];
  // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://your-backend-api.com/products"); // Replace with your backend API URL
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);
  return (
    <>
      {
        loading ? (<section className="px-3 pt-[120px] max-h-full pb-12 animate-pulse">
          <h2 className="relative text-3xl font-bold font-poppins text-center mb-12">
            <span className="relative z-10 text-2xl md:text-3xl px-4 bg-gray-200"></span>
            <span className="absolute inset-0 flex items-center">
              <span className="flex-1 w-10 h-[3px] bg-gray-200"></span>
              <span className="flex-1 w-10 h-[3px] bg-gray-200"></span>
            </span>
          </h2>
        
          <div className="flex flex-wrap sm:flex lg:flex-wrap gap-x-6 justify-evenly sm:gap-x-6 md:gap-x-10 gap-y-4">
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-40 sm:w-52 p-1">
              <div className="w-full h-48 bg-gray-200 rounded-3xl"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
              </div>
            </div>
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-40 sm:w-52 p-1">
              <div className="w-full h-48 bg-gray-200 rounded-3xl"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
              </div>
            </div>
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-40 sm:w-52 p-1">
              <div className="w-full h-48 bg-gray-200 rounded-3xl"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
              </div>
            </div>
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-40 sm:w-52 p-1">
              <div className="w-full h-48 bg-gray-200 rounded-3xl"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
                <div className="mt-2 h-4 bg-gray-200"></div>
              </div>
            </div>
            
          </div>
        </section>) : (<section className="px-3 pt-[120px] max-h-full pb-12">
        <h2
          className={` relative text-3xl font-bold font-poppins text-center mb-12 before:content-['Discover_Mithila_Artistry'] before:absolute before:text-maroon before:text-[13px] md:before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]`}
        >
          <span className="relative z-10 text-2xl md:text-3xl px-4 bg-white">
            Gallery Of Products
          </span>
          <span className="absolute inset-0 flex items-center">
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
          </span>
        </h2>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        ) : (
          // Product Grid
          <div className="flex flex-wrap sm:flex lg:flex-wrap gap-x-6 justify-center sm:gap-x-6 md:gap-x-10 gap-y-4">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-40 sm:w-52 p-1"
              >
                {/* Product Image */}
                <img
                  src={product.img} // Ensure 'image' exists in your product schema
                  alt={product.name}
                  className="w-full h-48 object-contain  rounded-3xl"
                />

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-maroon mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <p className="text-maroon font-semibold mt-2">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        </section>)
      }
        
    </>
  )
}

export default Gallery