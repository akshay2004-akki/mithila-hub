function Contact() {
  return (
    <>
      <section className="pt-[120px] max-h-full pb-12 font-poppins">
        <h2
          className={` relative text-3xl font-bold font-poppins text-center mb-12 before:content-['Chat_With_Us'] before:absolute before:text-maroon before:text-[13px] md:before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px]`}
        >
          <span className="relative z-10 text-2xl md:text-3xl px-4 bg-white">
            Contact Us
          </span>
          <span className="absolute inset-0 flex items-center">
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
          </span>
        </h2>

        <div className="bg-gradient-to-r text-black py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-center text-4xl font-extrabold font-poppins mb-8 relative">
              
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 h-2 w-32 bg-white opacity-20 rounded-full"></span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-black relative">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Write your message here"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-maroon hover:bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
                <div className="absolute -bottom-6 -right-6 bg-maroon h-16 w-16 rounded-full shadow-lg animate-pulse"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">Reach Out</h3>
                <p className="text-lg font-light">
                  Feel free to reach out for inquiries, feedback, or
                  collaborations.
                </p>
                <div className="flex flex-col items-left lg:items-start space-y-6 sm:items-center">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone-alt text-xl text-maroon"></i>
                    <span>+91 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-xl text-maroon"></i>
                    <span>mamta@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-xl text-maroon"></i>
                    <span>Bhagalpur, Bihar, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
