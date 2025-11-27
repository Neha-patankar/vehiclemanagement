

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../SuperAdmin/Header";

const ClientForm = ({ editClient, onSuccess }) => {
  const [formData, setFormData] = useState({
    client_type: "admin",
    client_name: "",
    client_mobile: "",
    company_id: "",
    company_name: "",
    profile_picture: null,
    existing_image: null,
  });

  const [companies, setCompanies] = useState([]);

  // 1️⃣ Load companies first
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/company")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error("Fetch Company Error:", err));
  }, []);

  // 2️⃣ When companies loaded, fill edit form
  useEffect(() => {
    if (editClient && companies.length > 0) {
      const selectedCompany = companies.find(
        (c) => c.id === editClient.company_id
      );

      setFormData({
        client_type: editClient.client_type,
        client_name: editClient.client_name,
        client_mobile: editClient.client_mobile,
        company_id: editClient.company_id,
        company_name: selectedCompany ? selectedCompany.company_name : "",
        profile_picture: null,
        existing_image: editClient.profile_picture,
      });
    }
  }, [editClient, companies]);

  // 3️⃣ Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile_picture") {
      setFormData({ ...formData, profile_picture: files[0] });
    } else if (name === "company_id") {
      const selected = companies.find((c) => String(c.id) === value);

      setFormData({
        ...formData,
        company_id: value,
        company_name: selected ? selected.company_name : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 4️⃣ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    try {
      if (editClient) {
        await axios.put(
          `http://localhost:5000/api/clientmaster/update/${editClient.id}`,
          data
        );
        alert("Updated Successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/clientmaster/create",
          data
        );
        alert("Created Successfully");
      }
      onSuccess();
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Error saving client");
    }
  };

  return (
    <div>
      <Header/>
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-6 w-full border border-gray-200"
    >
      <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
        {editClient ? "Update Client" : "Create New Client"}
      </h2>

      <div className="space-y-4">

        {/* Client Type */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Client Type
          </label>
          <select
            name="client_type"
            value={formData.client_type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        {/* Client Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Client Name
          </label>
          <input
            type="text"
            name="client_name"
            value={formData.client_name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter Client Name"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            name="client_mobile"
            value={formData.client_mobile}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Enter Mobile Number"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Company
          </label>
          <select
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">-- Select Company --</option>

            {/* SAFE MAP (companies always array) */}
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.company_name}
              </option>
            ))}
          </select>
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Profile Picture
          </label>

          <input
            type="file"
            name="profile_picture"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />

          {formData.existing_image && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-1">Current Image:</p>
              <img
                src={`http://localhost:5000/uploads/clients/${formData.existing_image}`}
                alt="Preview"
                className="w-20 h-20 rounded-lg border"
              />
            </div>
          )}
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-lg shadow">
          {editClient ? "Update Client" : "Create Client"}
        </button>
      </div>
    </form>
    </div>
  );
};

export default ClientForm;
