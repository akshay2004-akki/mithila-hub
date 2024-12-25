import { useState } from "react";
import axios from "axios";

const AdminAddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    count: 1,
    availability: "In Stock",
    image: null,
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    for (const key in formData) {
      if (key === "image") {
        Array.from(formData.image).forEach((file) =>
          form.append("image", file)
        );
      } else {
        form.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/gallery/addproducts",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
      setFormData({
        productName: "",
        description: "",
        category: "",
        price: "",
        count: 1,
        availability: "In Stock",
        image: null,
      });
    } catch (error) {
      setMessage(error.response?.data || "Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-left px-3 pt-[40px] items-center min-h-screen font-poppins">
      <div className="w-full max-w-lg bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Admin Panel: <span className="text-maroon">Add Product</span>
        </h2>
        {message && (
          <div
            className={`mb-4 text-center px-4 py-2 rounded-lg ${
              message.includes("Error")
                ? "bg-red-200 text-red-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="productName"
              className="block text-gray-700 font-medium"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>

          {/* Inline Fields */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="price"
                className="block text-gray-700 font-medium"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="count"
                className="block text-gray-700 font-medium"
              >
                Count
              </label>
              <input
                type="number"
                id="count"
                name="count"
                value={formData.count}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="image" className="block text-gray-700 font-medium">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full mt-1"
              multiple
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-maroon hover:bg-gold transition-all duration-100"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProduct;
