import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    // Fetch user data (replace with actual API endpoint)
    axios
      .get("http://localhost:5000/api/v1/users/", {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user data:", err);
        setLoading(false);
      });
  }, []);
  const route = useNavigate()
  const handleLogout = async()=>{
    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/logout",{}, {withCredentials:true})
      alert(res.data.message)
      localStorage.removeItem("isLoggedIn")
      route("/")
      window.location.reload();
      
    } catch (error) {
      alert(error.message)
    }
  }

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gold mb-4">Dashboard</h2>
            <p className="text-gray-800">Name: {userData.name}</p>
            <p className="text-gray-800">Email: {userData.email}</p>
            <p className="text-gray-800">Contact: {userData.contact}</p>
          </div>
        );
      case "Order History":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Order History
            </h2>
            {userData.orders && userData.orders.length > 0 ? (
              <ul className="space-y-4">
                {userData.orders.map((order, index) => (
                  <li
                    key={index}
                    className="border border-gray-300 rounded-md p-4"
                  >
                    <p>
                      <span className="font-medium text-gray-700">
                        Order ID:
                      </span>{" "}
                      {order.id}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Date:</span>{" "}
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Items:</span>{" "}
                      {order.items.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Total:</span>{" "}
                      ₹{order.total}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No orders found.</p>
            )}
          </div>
        );
      case "Wishlist":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gold mb-4">Wishlist</h2>
            <p className="text-gray-600">Your wishlist is empty.</p>
          </div>
        );
      case "Account Settings":
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Account Settings
            </h2>
            <p className="text-gray-600">
              Account settings functionality coming soon.
            </p>
          </div>
        );
        case "Logout":
          return (
            <button onClick={handleLogout} className="bg-maroon hover:bg-red-400 transition-all duration-100 p-1 px-4 text-2xl rounded-xl text-white">Logout</button>
          )
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gold">
        Loading Profile...
      </div>
    );
  }

  return (
    <section className="py-6 pt-[100px] px-4 min-h-screen w-full font-poppins">
      {/* Profile Header */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src=""
          alt="Profile Avatar"
          className="h-24 w-24 sm:h-36 sm:w-36 rounded-full object-cover border-4 border-gold shadow-md"
        />
        <p className="text-2xl sm:text-3xl mt-4 text-gray-800 text-center">
          Welcome Back, <span className="font-bold text-gold">Akshay</span>
        </p>
      </div>

      {/* Profile Menu Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden">
        {/* Sidebar Menu */}
        <div className="w-full sm:w-1/4 border-b sm:border-b-0 sm:border-r border-gray-300 bg-gray-100 p-4">
          <ul className="space-y-4">
            {[
              "Dashboard",
              "Order History",
              "Wishlist",
              "Account Settings",
              "Logout",
            ].map((menu) => (
              <li
                key={menu}
                className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
                  activeMenu === menu
                    ? "text-gold font-semibold"
                    : "text-gray-700 hover:text-gold"
                }`}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-3/4 p-6">{renderContent()}</div>
      </div>
    </section>
  );
}

export default Profile;
