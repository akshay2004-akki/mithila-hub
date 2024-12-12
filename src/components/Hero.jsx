import img1 from "../assets/border.jpeg";
import img2 from "../assets/fish.webp";
import img3 from "../assets/kobhar.png";
import img4 from "../assets/new.jpg";
import img5 from "../assets/DALL·E 2024-12-11 20.35.44 - A Mithila painting consisting of only four thin borders, one on each side of a white canvas. The borders feature intricate but minimal geometric patte.webp";
import img6 from "../assets/pic.jpg";
import img7 from "../assets/DALL·E 2024-12-12 19.19.20 - A minimalist Mithila painting style artwork featuring traditional motifs such as peacocks, fish, and intricate floral patterns. The design should be l.webp";
import img8 from "../assets/DALL·E 2024-12-12 19.20.17 - A lightweight Mithila painting artwork with a modern minimalist touch. The design includes traditional motifs like elephants, fish, and intricate geom.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <section className="relative w-full h-screen translate-y-[72px]">
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

        <img
          src={img6}
          alt=""
          className="absolute h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-white brightness-125"
        />
        {/* <div className="w-56 translate-y-[30px] sm:translate-y-[50px] md:w-64">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex justify-center items-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover h-72 w-96"
                />
              </div>
            ))}
          </Slider>
        </div> */}
      </section>
    </>
  );
}

export default Hero;
