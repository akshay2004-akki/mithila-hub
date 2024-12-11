import img1 from "../assets/border.jpeg";
import img2 from "../assets/fish.webp";
import img3 from "../assets/kobhar.png";
import img4 from "../assets/new.jpg";
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
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center sm:flex-row"
        style={{ backgroundImage: "url(https://example.com/banner.jpg)" }}
      >
        <div className="p-6 rounded-lg text-left">
          <h1 className="text-4xl text-left font-bold text-black mb-2">
            Authentic Mithila Art
          </h1>
          <p className="text-lg text-left text-black mb-4">
            Bringing tradition and beauty to your home
          </p>
          <button className="bg-gold mx-0 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Explore Gallery
          </button>
        </div>

        <div className="w-56 max-w-4xl mx-auto mt-10">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover h-80"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Hero;
