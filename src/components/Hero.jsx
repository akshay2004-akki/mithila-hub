function Hero() {
  return (
    <>
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(https://example.com/banner.jpg)" }}
      >
        <div className="p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-black mb-2">
            Authentic Mithila Art
          </h1>
          <p className="text-lg text-black mb-4">
            Bringing tradition and beauty to your home
          </p>
          <button className="bg-gold text-maroon py-2 px-4 rounded hover:bg-yellow-600">
            Explore Gallery
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
