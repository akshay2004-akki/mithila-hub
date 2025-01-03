import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [usercart, setUsercart] = useState([])

  useEffect(() => {
    // Fetch user data (replace with actual API endpoint)
    axios
      .get("http://localhost:5000/api/v1/users/userdetails", {
        withCredentials: true,
      })
      .then((res) => {
        // setUserData(res.data.user);
        // console.log(res.data.data);
        setUserData(res.data.data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/cart/getUsercart", {withCredentials:true})
        .then((res)=>{
          console.log(res.data.data[0].products);
          setUsercart(res.data.data[0].products)
        })
  },[])
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
            <h2 className="text-2xl text-center font-semibold text-gold mb-4">Dashboard</h2>
            <p className="text-gray-800 text-xl">Name: {userData.fullName}</p> <br />
            <p className="text-gray-800 text-xl">Email: {userData.email}</p> <br />
            <p className="text-gray-800 text-xl">Contact: {userData?.contact}</p><br />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usercart.length > 0 ? (
          usercart.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image.length > 0 ? item.image[0] : "/default-image.jpg"}
                alt={item.productName}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-lg font-bold text-gold mt-2">₹{item.price}</p>
              <p
                className={`mt-1 ${
                  item.availability === "In Stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.availability}
              </p>
              <button
                className="mt-4 bg-gold text-white py-2 px-4 rounded hover:bg-gold-dark transition-all"
              >
                Remove from Wishlist
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No items in your wishlist.</p>
        )}
      </div>
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
        <div className="w-full h-96 overflow-scroll sm:w-3/4 p-6">{renderContent()}</div>
      </div>
    </section>
  );
}

export default Profile;
