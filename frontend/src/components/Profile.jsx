import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    // Fetch user data (replace with actual API endpoint)
    axios
      .get("http://localhost:5000/api/v1/users/profile", {
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
    <section className="py-4 pt-[100px] px-3 min-h-screen w-full">
      <div className="h-auto w-full flex flex-col items-center justify-center">
        <img src="" alt="" className="h-28 w-28 sm:h-40 sm:w-40 rounded-full" />
        <p className="font-poppins text-2xl sm:text-3xl">
          Welcome Back, <span className="font-bold">Akshay</span>
        </p>
      </div>
      {/* Profile Menus */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg flex">
        {/* Sidebar Menu */}
        <div className="w-1/4 border-r border-gray-300 p-4">
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
                className={`cursor-pointer text-lg font-medium ${
                  activeMenu === menu ? "text-gold" : "text-gray-700"
                } hover:text-gold`}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">{renderContent()}</div>
      </div>
    </section>
  );
}

export default Profile;
