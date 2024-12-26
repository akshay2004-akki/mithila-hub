import { useEffect } from "react";
import axios from "axios";


function Chunri({category}) {
  useEffect(()=>{
    const fetchBedSheetProducts = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/gallery/categories/${category}`, {withCredentials:true})
        console.log(res.data);
        
      } catch (error) {
        console.log(error.message);
        
      }
    }
    fetchBedSheetProducts()
  },[])
  return (
    <section className="pb-12 pt-[120px] px-3 max-h-full ">
        <h2
          className={` relative text-3xl font-bold font-poppins text-center mb-12 before:content-['Chunri'] before:absolute before:text-maroon before:text-[18px] md:before:text-[18px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]`}
        >
          <span className="relative z-10 text-2xl md:text-3xl px-4 bg-white">
            Category
          </span>
          <span className="absolute inset-0 flex items-center">
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
          </span>
        </h2>
      </section>
  )
}

export default Chunri