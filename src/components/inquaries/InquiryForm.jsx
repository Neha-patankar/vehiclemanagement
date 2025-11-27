// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function InquiryForm({ editId, onSuccess }) {
//   const [formData, setFormData] = useState({
//     contact_mobile: "",
//     contact_name: "",
//     mas: "",
//     company_name: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     no_of_vehicles: "",
//     email: "",
//     website: "",
//   });

//   // Load data if editing
//   useEffect(() => {
//     if (editId) {
//       axios.get(`http://localhost:5000/api/inquiries/${editId}`)
//         .then((res) => setFormData(res.data))
//         .catch((err) => console.error(err));
//     }
//   }, [editId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`http://localhost:5000/api/inquiries/${editId}`, formData);
//         alert("Inquiry updated successfully");
//       } else {
//         await axios.post("http://localhost:5000/api/inquiries", formData);
//         alert("Inquiry submitted successfully");
//       }

//       // Call onSuccess safely
//       if (typeof onSuccess === "function") {
//         onSuccess();
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-lg p-4 rounded-xl">
//       <h2 className="text-xl font-bold text-center mb-4">
//         {editId ? "Update Inquiry" : "Submit Inquiry"}
//       </h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         <input
//           type="text"
//           name="contact_name"
//           placeholder="Contact Name"
//           value={formData.contact_name}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="contact_mobile"
//           placeholder="Contact Mobile"
//           value={formData.contact_mobile}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="mas"
//           placeholder="MAS"
//           value={formData.mas}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="company_name"
//           placeholder="Company Name"
//           value={formData.company_name}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="p-2 border rounded col-span-2"
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={formData.city}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           value={formData.pincode}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="number"
//           name="no_of_vehicles"
//           placeholder="Number of Vehicles"
//           value={formData.no_of_vehicles}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="website"
//           placeholder="Website"
//           value={formData.website}
//           onChange={handleChange}
//           className="p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="col-span-2 bg-blue-600 text-white py-2 rounded"
//         >
//           {editId ? "Update" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Building2, User, Phone, MapPin, Mail, Globe, Car, Hash } from "lucide-react";

export default function InquiryForm({ editId, onSuccess }) {
  const [formData, setFormData] = useState({
    contact_mobile: "",
    contact_name: "",
    mas: "",
    company_name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    no_of_vehicles: "",
    email: "",
    website: "",
  });

  // Load data if editing
  useEffect(() => {
    if (editId) {
      fetch(`http://localhost:5000/api/inquiries/${editId}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error(err));
    }
  }, [editId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId 
        ? `http://localhost:5000/api/inquiries/${editId}`
        : "http://localhost:5000/api/inquiries";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editId ? "Inquiry updated successfully" : "Inquiry submitted successfully");
        if (typeof onSuccess === "function") {
          onSuccess();
        }
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {editId ? "Update Inquiry" : "Business Inquiry Form"}
          </h1>
          <p className="text-gray-600">
            Fill in your details to get started with our fleet management system
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Purple Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-8">
            <h2 className="text-2xl font-bold text-center">Contact Information</h2>
          </div>

          <div className="p-8">
            {/* Personal Info Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                Personal Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="contact_name"
                    placeholder="Contact Name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="contact_mobile"
                    placeholder="Contact Mobile"
                    value={formData.contact_mobile}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Hash className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="mas"
                    placeholder="Msg"
                    value={formData.mas}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                Company Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative md:col-span-2">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Building2 className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative md:col-span-2">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Complete Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Hash className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Globe className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Fleet Info Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-purple-600" />
                Fleet Details
              </h3>
              <div className="relative max-w-md">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <Car className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  name="no_of_vehicles"
                  placeholder="Number of Vehicles"
                  value={formData.no_of_vehicles}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02]"
            >
              {editId ? "Update Inquiry" : "Submit Inquiry"}
            </button>

            {/* Footer Note */}
            <p className="text-center text-gray-500 text-sm mt-6">
              By submitting this form, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Need assistance? Contact our support team</p>
          <p className="mt-2 text-gray-400">Powered by Aanshi Solutions</p>
        </div>
      </div>
    </div>
  );
}