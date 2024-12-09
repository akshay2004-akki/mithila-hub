function App() {

  return (
    <>
      <div className="font-sans bg-beige text-gray-900">
            {/* Header */}
            <header className="bg-maroon p-5 shadow-lg">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gold">Mithila Creations</div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className="text-white hover:text-gold">Home</a></li>
                            <li><a href="#gallery" className="text-white hover:text-gold">Gallery</a></li>
                            <li><a href="#about" className="text-white hover:text-gold">About Us</a></li>
                            <li><a href="#contact" className="text-white hover:text-gold">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://example.com/banner.jpg)' }}>
                <div className="bg-opacity-70 bg-black p-6 rounded-lg text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Authentic Mithila Art</h1>
                    <p className="text-lg text-white mb-4">Bringing tradition and beauty to your home</p>
                    <button className="bg-gold text-maroon py-2 px-4 rounded hover:bg-yellow-600">Explore Gallery</button>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="p-10">
                <h2 className="text-center text-3xl font-bold text-maroon mb-8">Our Featured Paintings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img src="https://example.com/image1.jpg" alt="Peacock Delight" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-maroon">Peacock Delight</h3>
                        <p className="text-gray-600">Price: $150</p>
                        <button className="mt-2 bg-maroon text-white py-1 px-4 rounded hover:bg-red-700">Buy Now</button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img src="https://example.com/image2.jpg" alt="Lotus Bloom" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-maroon">Lotus Bloom</h3>
                        <p className="text-gray-600">Price: $120</p>
                        <button className="mt-2 bg-maroon text-white py-1 px-4 rounded hover:bg-red-700">Buy Now</button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img src="https://example.com/image3.jpg" alt="Elephant Elegance" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-maroon">Elephant Elegance</h3>
                        <p className="text-gray-600">Price: $200</p>
                        <button className="mt-2 bg-maroon text-white py-1 px-4 rounded hover:bg-red-700">Buy Now</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-maroon text-white py-6">
                <p className="text-center">&copy; 2024 Mithila Creations | <a href="#" className="text-gold hover:underline">Privacy Policy</a></p>
            </footer>
        </div>
    </>
  )
}

export default App
