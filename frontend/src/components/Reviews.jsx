import Tilt from 'react-parallax-tilt'
function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Anjali Mishra",
      location: "Patna, Bihar",
      review:
        "The intricate designs and vibrant colors truly reflect the beauty of Mithila paintings. Highly satisfied with the purchase!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Mumbai, Maharashtra",
      review:
        "The craftsmanship is exceptional, and the painting looks stunning in my living room. Will buy again!",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Delhi, India",
      review:
        "The painting was beautifully packed and delivered on time. It’s a piece of art I’ll cherish forever.",
      rating: 5,
    },
    {
      id: 4,
      name: "Manoj Das",
      location: "Kolkata, West Bengal",
      review:
        "While the artwork is amazing, the colors looked slightly different than on the website. Still worth it!",
      rating: 4,
    },
    {
      id: 5,
      name: "Sneha Kulkarni",
      location: "Bengaluru, Karnataka",
      review:
        "The detailing and authenticity of the painting are unmatched. It’s a perfect addition to my collection.",
      rating: 5,
    },
    {
      id: 6,
      name: "Ravi Nair",
      location: "Chennai, Tamil Nadu",
      review:
        "I’m impressed with the quality and the cultural essence captured in the artwork. Worth every penny.",
      rating: 4.8,
    },
  ];

  return (
    <>
      <section className="py-12 px-3 max-h-full w-full">
        <h2 className=" relative text-3xl font-bold font-poppins text-center mb-12 before:content-['Words_By_Customer'] before:absolute before:text-maroon before:text-[13px] md:before:text-[15px] before:top-[-20px] before:left-1/2 before:-translate-x-1/2 before:translate-y-[50px] ">
          <span className="relative z-10 text-2xl md:text-3xl px-4 bg-white">
            Reviews
          </span>
          <span className="absolute inset-0 flex items-center">
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
            <span className="flex-1 w-10 h-[3px] bg-maroon"></span>
          </span>
        </h2>

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
              {reviews.map((review) => (
                <Tilt

                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    scale={1.2}
                  key={review.id}
                  className="review-card hover:z-[10] hover:shadow-2xl bg-white p-6 shadow-md rounded-lg transition-shadow duration-300"
                >
                  <h3 className="font-bold text-lg text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-gray-700 mt-2">{review.review}</p>
                  <span className="block mt-4 text-yellow-500 font-semibold">{`⭐ ${review.rating} / 5`}</span>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
