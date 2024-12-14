import { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRating = (rating) => {
    setFormData((prevData) => ({
      ...prevData,
      rating,
    }));
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    console.log(formData);

    // Optional: Clear form after submission
    setFormData({
      name: "",
      email: "",
      rating: 0,
      feedback: "",
    });
  };

  return (
    <>
      <section className="py-12 max-h-full font-poppins">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-maroon text-center mb-8">
            Share Your Feedback
          </h2>
          <form
            onSubmit={handleFeedback}
            className="bg-white shadow-lg rounded-lg px-6 py-8 max-w-lg mx-auto space-y-6"
          >
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`text-2xl focus:outline-none ${
                      star <= formData.rating ? "text-maroon" : "text-gray-400"
                    } transition-colors`}
                    aria-label={`Rate ${star}`}
                    onClick={() => handleRating(star)}
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
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
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
