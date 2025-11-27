

import React, { useEffect, useState } from "react";
import axios from "axios";
import ComapanyRegistration from "./ComapanyRegistration";
import Header from "../SuperAdmin/Header";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchCompanies = () => {
    axios.get("http://localhost:5000/api/company").then((res) => {
      setCompanies(res.data);
    });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/api/company/${id}`);
    fetchCompanies();
  };

  const handleEdit = (id) => {
    setEditId(id);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditId(null);
    setShowForm(true);
  };

  return (
    <div className="p-0">
    <Header/>
      {/* ---------- ADD NEW BUTTON ---------- */}
      <div className="flex items-center justify-between mb-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 shadow-lg px-4 py-2">
  <h1 className="text-md font-bold text-white text-center flex-1">
    Companies Management
  </h1>

  <button
    onClick={handleAddNew}
    className="px-4 py-2 bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 text-md text-white rounded-lg shadow hover:bg-green-700"
  >
    + Add New
  </button>
</div>


      {/* ---------- FORM SECTION (Show only when add/edit) ---------- */}
      {showForm && (
        <div className="mb-0 border p-1 rounded-xl bg-white shadow-lg">
          <ComapanyRegistration
            editId={editId}
            onSuccess={() => {
              setEditId(null);
              setShowForm(false);
              fetchCompanies();
            }}
          />

          {/* <button
            onClick={() => { setShowForm(false); setEditId(null); }}
            className="mt-4 bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            Close Form
          </button> */}
        </div>
      )}

      {/* ---------- TABLE ---------- */}
      <div className="overflow-auto shadow-lg rounded-lg border">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 text-white">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Company ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Short Name</th>
              <th className="p-2">City</th>
              <th className="p-2">State</th>
              <th className="p-2">GST</th>
              <th className="p-2">Email</th>
              <th className="p-2">Logo</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {companies.length > 0 ? (
              companies.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-center">{c.id}</td>
                  <td className="p-2 text-center">{c.company_Id}</td>
                  <td className="p-2">{c.company_name}</td>
                  <td className="p-2">{c.company_short_name}</td>
                  <td className="p-2">{c.city}</td>
                  <td className="p-2">{c.state}</td>
                  <td className="p-2">{c.gst_no}</td>
                  <td className="p-2">{c.email}</td>

                  <td className="p-2 text-center">
                    {c.logo_path ? (
                      <img
                        src={`http://localhost:5000/${c.logo_path}`}
                        alt="logo"
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      "No Logo"
                    )}
                  </td>

                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleEdit(c.id)}
                      className="px-2 py-1 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHandler(c.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan="10">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

