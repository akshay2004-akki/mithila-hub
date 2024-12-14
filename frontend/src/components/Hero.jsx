import img6 from "../assets/pic.jpg";
import img7 from "../assets/DALL·E 2024-12-12 19.19.20 - A minimalist Mithila painting style artwork featuring traditional motifs such as peacocks, fish, and intricate floral patterns. The design should be l.webp";
import img8 from "../assets/DALL·E 2024-12-12 19.20.17 - A lightweight Mithila painting artwork with a modern minimalist touch. The design includes traditional motifs like elephants, fish, and intricate geom.webp";
import Tilt from 'react-parallax-tilt'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {

  return (
    <>
      <section className="relative w-full h-screen">
        <div className="flex flex-col sm:flex-row h-screen w-full gap-[1px]">
          <img
            src={img7}
            alt=""
            className="object-cover brightness-[0.6] h-[50vh] sm:h-full w-full sm:w-1/2"
          />

          <img
            src={img8}
            alt=""
            className="object-cover brightness-[0.6] h-[50vh] sm:h-full w-full sm:w-1/2"
          />
        </div>

        <div className="absolute top-1/2 lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        // glareEnable={true}
        // glareMaxOpacity={0.5}
        scale={1.1}
        // className="w-[300px] h-[300px] bg-white shadow-lg rounded-lg flex justify-center items-center"
      >
        <img
            src={img6}
            alt="Presented by Mamta Das"
            className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full shadow-white brightness-125"
          />
      </Tilt>
          
        </div>
        <div className="absolute top-[65%] md:top-[65%] left-1/2 transform -translate-x-1/2 flex items-center">
          <p className="text-3xl lg:text-6xl text-center backdrop-blur-sm p-2 rounded-3xl text-white font-thin">
            Presented <br /> <span className="text-4xl">By</span>{" "}
            <br />
            Mamta Das
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
