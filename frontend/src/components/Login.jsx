import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form inputs
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Example: Simulate API call

    try {
        const res = await axios.post("http://localhost:5000/api/v1/users/login", {email, password}, {withCredentials:true})
        alert(res.data.message)
        console.log(res.data);
        
        setIsLoggedIn(true)
        localStorage.setItem("isLoggedIn", true)
        route("/")
        window.location.reload();
        
        
    } catch (error) {
        console.log(error.message);
        console.log("Login failed");
        
        
    }
    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center font-poppins min-h-screen bg-gradient-to-br from-white via-gold to-maroon">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gold focus:border-gold text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gold focus:border-gold text-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-gold border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gold hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gold text-white py-2 px-4 rounded-md shadow hover:bg-gold-dark transition-all duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-gold font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
