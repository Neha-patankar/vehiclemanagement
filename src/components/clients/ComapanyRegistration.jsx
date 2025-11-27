


import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CompanyRegistration({ editId, onSuccess }) {
  const [formData, setFormData] = useState({
    company_name: "",
    company_short_name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gst_no: "",
    email: "",
    website: "",
    logo_path: "",
  });

  const [logoFile, setLogoFile] = useState(null); // NEW

  useEffect(() => {
    if (editId) {
      axios.get(`http://localhost:5000/api/company/${editId}`).then((res) => {
        setFormData(res.data);
      });
    }
  }, [editId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (logoFile) {
      data.append("logo", logoFile);
    }

    if (editId) {
      await axios.put(`http://localhost:5000/api/company/${editId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Company Updated Successfully");
    } else {
      await axios.post(`http://localhost:5000/api/company`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Company Created Successfully");
    }

    onSuccess();
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-2 rounded-xl mt-0 border">
      <h2 className="text-xl font-bold text-center mb-4 text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 rounded-xl py-1">
        {editId ? "Update Company" : "Create Company"}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-1">
        
        {/* Company Name */}
        <div>
          <label className="block font-bold mb-0 ">Company Name</label>
          <input
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Short Name */}
        <div>
          <label className="block font-bold mb-0">Short Name</label>
          <input
            name="company_short_name"
            value={formData.company_short_name}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-bold mb-0">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block font-bold mb-0">Website</label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block font-bold mb-0">GST Number</label>
          <input
            name="gst_no"
            value={formData.gst_no}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* City */}
        <div>
          <label className="block font-bold mb-0">City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* State */}
        <div>
          <label className="block font-bold mb-0">State</label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block font-bold mb-0">Pincode</label>
          <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Logo Upload */}
        <div className="col-span-2">
          <label className="block font-bold mb-0">Company Logo</label>
          <input
            type="file"
            onChange={handleLogoChange}
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="block font-bold mb-0">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={2}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>

        {/* Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            {editId ? "Update" : "Create"}
          </button>
        </div>

      </form>
    </div>
  );
}
