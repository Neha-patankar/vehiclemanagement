


import { useState } from "react";
import axios from "axios";

function CreateClient() {
  const [form, setForm] = useState({
    client_name: "",
    company_name: "",
    company_id: "",
    company_short_name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
    gst_no: "",
    contact_person: "",
    email: "",
    website: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/client", form);
      alert("Client Created Successfully");
      console.log("Response:", res.data);
    } catch (error) {
      console.log("Create Client Error:", error.response?.data || error);
      alert("Error Creating Client");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-t-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-white text-center">Create New Client</h2>
          <p className="text-white text-center mt-2 opacity-90">Fill in the details to add a new client</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-b-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(form).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    {field.replaceAll("_", " ").toUpperCase()}
                  </label>
                  <input
                    type="text"
                    name={field}
                    placeholder={`Enter ${field.replaceAll("_", " ")}`}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 hover:border-gray-300"
                  />
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
              >
                Create Client
              </button>
            </div>
          </form>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">💡 Tip:</span> All fields are required. Make sure to fill in accurate information for smooth client management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateClient;