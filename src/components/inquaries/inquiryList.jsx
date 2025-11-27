import React, { useState, useEffect } from "react";
import axios from "axios";
import InquiryForm from "./InquiryForm";

export default function InquiryList() {
  const [inquiries, setInquiries] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchInquiries = () => {
    axios.get("http://localhost:5000/api/inquiries")
      .then((res) => setInquiries(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleEdit = (id) => {
    setEditId(id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/inquiries/${id}`);
    fetchInquiries();
  };

  const handleAddNew = () => {
    setEditId(null);
    setShowForm(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Inquiry Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add New
        </button>
      </div>

      {showForm && (
        <InquiryForm
          editId={editId}
          onSuccess={() => {
            setShowForm(false);
            setEditId(null);
            fetchInquiries();
          }}
        />
      )}

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inq) => (
            <tr key={inq._id}>
              <td className="border p-2">{inq.contact_name}</td>
              <td className="border p-2">{inq.contact_mobile}</td>
              <td className="border p-2">{inq.company_name}</td>
              <td className="border p-2">{inq.city}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(inq._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(inq._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {inquiries.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-2">
                No Inquiries Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
