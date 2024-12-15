import akshay from "../assets/resume pic3.jpeg";
import mamta from "../assets/mamta.png";

function About() {
  return (
    <>
      <section className="max-h-full pb-12 pt-[120px] px-3 bg-white">
      <h2 className={` relative text-3xl font-bold font-poppins text-center mb-12 before:content-['About_Us'] before:absolute before:text-maroon before:text-[13px] md:before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]`}>
      <span className="relative z-10 text-2xl md:text-3xl px-4 bg-white">
        Who We Are
      </span>
      <span className="absolute inset-0 flex items-center">
        <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
        <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
      </span>
    </h2>
        <div className="px-4 pb-12">
          <h2 className="font-semibold text-xl sm:text-2xl font-poppins text-maroon py-3">
            Meet the Artist :{" "}
            <span className="text-2xl sm:text-4xl font-semibold text-yellow-700">
              Mamta Das
            </span>
          </h2>
          <p className="font-poppins text-[17px] sm:text-xl">
            Hailing from the vibrant city of Bhagalpur, Bihar, Mamta Das is a
            passionate and self-taught artist specializing in the timeless art
            of Mithila painting. With over 5 years of experience, Mamta has
            mastered her craft through dedication and an unwavering love for
            tradition. Her creations reflect the essence of Indian culture,
            blending intricate designs with a contemporary touch. Known for her
            timely project completion, Mamta ensures each piece is a true work
            of art, delivered with perfection.
          </p>
          <div className="relative py-8">
            <div className="relative before:absolute before:content-['Mamta_Das'] before:bg-maroon before:text-[18px] before:text-white before:z-20 before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:py-1 before:px-3 before:rounded-md">
              <img
                src={mamta}
                alt="Mamta Das"
                className="h-[200px] w-[200px] rounded-3xl mx-auto"
              />
            </div>
          </div>
        </div>
        <hr className="h-[2px] bg-black" />
        <div className="pb-10 pt-9 px-4 flex-col sm:flex sm:justify-evenly">
          <h2 className="font-semibold text-xl sm:text-2xl font-poppins text-maroon py-3">
            About the Developer :{" "}
            <span className="text-2xl sm:text-4xl font-semibold text-yellow-700">
              Akshay Anand
            </span>
          </h2>
          <p className="font-poppins text-[18px] sm:text-xl">
            This platform is brought to life by Akshay Anand, a skilled and
            enthusiastic web developer dedicated to showcasing Mamta&apos;s
            exceptional talent. By blending modern web technology with the
            elegance of Mithila art, Akshay ensures a seamless experience for
            art lovers and admirers worldwide.
          </p>
          <div className="relative py-8">
            <div className="relative before:absolute before:content-['Akshay_Anand'] before:bg-maroon before:text-[18px] before:text-white before:z-20 before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:py-1 before:px-3 before:rounded-md">
              <img
                src={akshay}
                alt="Mamta Das"
                className="h-[230px] w-[200px] rounded-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
