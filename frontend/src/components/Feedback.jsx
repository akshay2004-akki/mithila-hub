function Feedback() {
  const handleRating = (rating) => {
    console.log(rating);
  };

  return (
    <>
      <section className="py-12 font-poppins">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-maroon text-center mb-8">
            Share Your Feedback
          </h2>
          <form className="bg-white shadow-lg rounded-lg px-6 py-8 max-w-lg mx-auto space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-maroon mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-maroon mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-lg font-semibold text-maroon mb-2">
                Rate Us
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className="text-gray-400 text-2xl focus:outline-none hover:text-maroon transition-colors"
                    aria-label={`Rate ${rating}`}
                    onClick={() => handleRating(rating)}
                  >
                    <i className="fas fa-star"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Field */}
            <div>
              <label
                htmlFor="feedback"
                className="block text-lg font-semibold text-maroon mb-2"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                placeholder="Share your thoughts"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-maroon text-white font-semibold rounded-lg shadow-md hover:bg-maroon/80 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Feedback;
