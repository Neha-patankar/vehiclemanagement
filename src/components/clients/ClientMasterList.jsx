


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../SuperAdmin/Header";

export default function ClientMasterList() {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const [formData, setFormData] = useState({
    client_type: "client",
    client_name: "",
    client_mobile: "",
    company_id: "",
    company_name: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch clients
  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clientmaster");
      setClients(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching clients");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Delete client
  const deleteHandler = async (id, name) => {
  if (!window.confirm(`Delete "${name}" ?`)) return;

  try {
    const res = await axios.delete(`http://localhost:5000/api/clientmaster/${id}`);

    if (res.data.success) {
      alert("Deleted successfully!");
      fetchClients();
    }
  } catch (err) {
    console.error(err);
    alert("Delete Error!");
  }
};


  // Edit client → open modal
  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/clientmaster/${id}`);
      const client = res.data;

      setSelectedClient(client);
      setFormData({
        client_type: client.client_type,
        client_name: client.client_name,
        client_mobile: client.client_mobile,
        company_id: client.company_id,
        company_name: client.company_name,
      });

      setExistingImage(client.profile_picture || "");
      setPreviewImage(
        client.profile_picture
          ? `http://localhost:5000/uploads/clients/${client.profile_picture}`
          : ""
      );

      setProfilePicture(null);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert("Error loading client data!");
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedClient(null);
    setProfilePicture(null);
    setPreviewImage("");
    setExistingImage("");
  };

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Update client
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.client_name || !formData.client_mobile) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("client_type", formData.client_type);
      data.append("client_name", formData.client_name);
      data.append("client_mobile", formData.client_mobile);
      data.append("company_id", formData.company_id);
      data.append("company_name", formData.company_name);
      data.append("existing_image", existingImage);

      if (profilePicture) {
        data.append("profile_picture", profilePicture);
      }

      const res = await axios.put(
        `http://localhost:5000/api/clientmaster/${selectedClient.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        alert("Client updated successfully!");
        closeModal();
        fetchClients();
      }
    } catch (err) {
      console.error(err);
      alert("Error updating client");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    navigate("/admin/create-client");
  };

  return (
    <div className="p-4">
      <Header/>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 p-3 rounded flex justify-between items-center mb-6 shadow">
        <h2 className="text-xl text-white font-bold w-full text-center">
          All Clients ({clients.length})
        </h2>
        <button
          onClick={handleAddNew}
          className="px-4 py-2 bg-blue-800 text-white rounded"
        >
          + Add New
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border p-2">ID</th>
              <th className="border p-2">Unique ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Company</th>
              <th className="border p-2">Profile</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.length > 0 ? (
              clients.map((c) => (
                <tr key={c.id} className="hover:bg-gray-100">
                  <td className="border p-2 text-center">{c.id}</td>
                  <td className="border p-2 text-center">{c.client_unique_id}</td>
                  <td className="border p-2">{c.client_name}</td>
                  <td className="border p-2">{c.client_mobile}</td>
                  <td className="border p-2">{c.company_name}</td>

                  <td className="border p-2 text-center">
                    {c.profile_picture ? (
                      <img
                        src={`http://localhost:5000/uploads/clients/${c.profile_picture}`}
                        className="w-12 h-12 object-cover rounded mx-auto"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleEdit(c.id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteHandler(c.id, c.client_name)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  No Clients Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            <div className="bg-orange-500 p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Edit Client</h3>
              <button
                onClick={closeModal}
                className="text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Client Type */}
              <div>
                <label className="block mb-1 font-semibold">Client Type *</label>
                <select
                  name="client_type"
                  value={formData.client_type}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="client">Client</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Client Name */}
              <div>
                <label className="block mb-1 font-semibold">Client Name *</label>
                <input
                  type="text"
                  name="client_name"
                  value={formData.client_name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-1 font-semibold">Mobile *</label>
                <input
                  type="text"
                  name="client_mobile"
                  value={formData.client_mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              {/* Company ID */}
              <div>
                <label className="block mb-1 font-semibold">Company ID</label>
                <input
                  type="text"
                  name="company_id"
                  value={formData.company_id}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block mb-1 font-semibold">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block mb-1 font-semibold">Profile Picture</label>

                {previewImage && (
                  <img
                    src={previewImage}
                    className="w-32 h-32 object-cover rounded border mb-3"
                  />
                )}

                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white py-2 rounded mt-4"
              >
                {loading ? "Updating..." : "Update Client"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
