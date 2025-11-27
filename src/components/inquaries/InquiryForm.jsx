import React, { useState, useEffect } from "react";
import axios from "axios";

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
      axios.get(`http://localhost:5000/api/inquiries/${editId}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error(err));
    }
  }, [editId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/inquiries/${editId}`, formData);
        alert("Inquiry updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/inquiries", formData);
        alert("Inquiry submitted successfully");
      }

      // Call onSuccess safely
      if (typeof onSuccess === "function") {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-4 rounded-xl">
      <h2 className="text-xl font-bold text-center mb-4">
        {editId ? "Update Inquiry" : "Submit Inquiry"}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="contact_name"
          placeholder="Contact Name"
          value={formData.contact_name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="contact_mobile"
          placeholder="Contact Mobile"
          value={formData.contact_mobile}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="mas"
          placeholder="MAS"
          value={formData.mas}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          value={formData.company_name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="p-2 border rounded col-span-2"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="no_of_vehicles"
          placeholder="Number of Vehicles"
          value={formData.no_of_vehicles}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-2 rounded"
        >
          {editId ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
