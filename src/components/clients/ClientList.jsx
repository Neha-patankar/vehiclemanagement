


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../SuperAdmin/Header";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);
   const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clients");
      setClients(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching clients:", err);
      setLoading(false);
    }
  };

  const deleteClient = async (id) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/client/${id}`);
      fetchClients();
    } catch (err) {
      console.error("Error deleting client:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/client-status/${id}`, { status });
      fetchClients();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const saveEditedClient = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/client/${editData.id}`,
        editData
      );
      setEditData(null);
      fetchClients();
    } catch (err) {
      console.error("Error updating client:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <h3 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-0">
      <Header/>
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 shadow-lg p-2 mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white text-center w-full">
          All Clients
        </h2>

        <button
          onClick={() => navigate("/admin/create-client")}
          className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900  text-white text-nowrap font-bold px-4 py-1 rounded shadow border border-white"
        >
          Add Client
        </button>
      </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900  text-white border-b-2 border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Comp ID</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Client Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Company Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Company ID</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">City</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Mobile</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">GST</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Contact Person</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Change Status</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {clients.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.client_unique_id || "—"}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.client_name}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.company_name}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.company_id}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.city}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.mobile}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.gst_no}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.contact_person}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">{c.email}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        c.status === 'active' ? 'bg-green-100 text-green-800' :
                        c.status === 'blocked' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={c.status}
                        onChange={(e) => updateStatus(c.id, e.target.value)}
                        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="active">Active</option>
                        <option value="not_active">Not Active</option>
                        <option value="blocked">Blocked</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => setEditData(c)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteClient(c.id)}
                          className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Popup */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-bold text-white">Edit Client</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(editData).map((key) =>
                  key !== "id" && key !== "client_unique_id" && key !== "status" ? (
                    <div key={key} className="flex flex-col">
                      <label className="text-sm font-medium text-gray-700 mb-1">
                        {key.replaceAll("_", " ").toUpperCase()}
                      </label>
                      <input
                        name={key}
                        value={editData[key] || ""}
                        onChange={(e) =>
                          setEditData({ ...editData, [key]: e.target.value })
                        }
                        placeholder={key.replaceAll("_", " ").toUpperCase()}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  ) : null
                )}
              </div>

              <div className="flex gap-3 mt-6 justify-end">
                <button
                  onClick={() => setEditData(null)}
                  className="px-6 py-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEditedClient}
                  className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientList;