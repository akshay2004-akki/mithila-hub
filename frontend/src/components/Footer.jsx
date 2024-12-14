import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-maroon font-poppins bottom-0 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center border-b border-white/20 pb-6 mb-6">
            {/* About Section */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h4 className="text-lg font-bold mb-3">About Us</h4>
              <p className="text-sm">
                Our platform celebrates the rich tradition of Mithila art,
                offering handpicked, authentic paintings crafted by skilled
                artisans.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h4 className="text-lg font-bold mb-3">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gold underline transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-gold underline transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-gold underline transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full sm:w-1/3">
              <h4 className="text-lg font-bold mb-3">Get in Touch</h4>
              <p className="text-sm">
                Email:{" "}
                <Link
                  to="mailto:info@mithilapaintings.com"
                  className="hover:text-gold transition-colors"
                >
                  info@mithilapaintings.com
                </Link>
              </p>
              <p className="text-sm">
                Phone:{" "}
                <Link
                  to="tel:+919876543210"
                  className="hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </Link>
              </p>
              <p className="text-sm">Location: Bhagalpur, Bihar, India</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Mithila World. All rights
              reserved.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
