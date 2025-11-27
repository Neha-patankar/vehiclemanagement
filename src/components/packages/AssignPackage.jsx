import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../SuperAdmin/Header";

export default function AssignPackage() {
  const [clients, setClients] = useState([]);
  const [packages, setPackages] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // Track edit mode

  const fetchClients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clientmaster");
      setClients(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const loadPackages = async () => {
    const res = await axios.get("http://localhost:5000/api/packages");
    setPackages(res.data);
  };

  const fetchAssigned = async () => {
    const res = await axios.get("http://localhost:5000/api/assigned-packages");
    setAssigned(res.data);
  };

  useEffect(() => {
    fetchClients();
    loadPackages();
    fetchAssigned();
  }, []);

  const handlePackageChange = (clientId, pkgId) => {
    const selectedPkg = packages.find((p) => p.package_id === pkgId);
    setFormData({
      ...formData,
      [clientId]: {
        ...formData[clientId],
        package_id: pkgId,
        price_per_vehicle: selectedPkg ? selectedPkg.price_per_vehicle : 0,
        total_amount:
          selectedPkg && formData[clientId]?.vehicles
            ? selectedPkg.price_per_vehicle * formData[clientId].vehicles
            : 0,
      },
    });
  };

  const handleVehicleChange = (clientId, vehicles) => {
    const pkgPrice = formData[clientId]?.price_per_vehicle || 0;
    setFormData({
      ...formData,
      [clientId]: {
        ...formData[clientId],
        vehicles,
        total_amount: pkgPrice * vehicles,
      },
    });
  };

  const handleAssign = async (clientId) => {
    const data = formData[clientId];
    if (!data || !data.package_id || !data.vehicles) {
      alert("Select package and vehicles");
      return;
    }
    try {
      if (editingId) {
        // Update assigned package
        await axios.put(
          `http://localhost:5000/api/assigned-package/${editingId}`,
          {
            package_id: data.package_id,
            vehicles: data.vehicles,
            total_amount: data.total_amount,
          }
        );
        setEditingId(null);
        alert("Package updated successfully!");
      } else {
        // Create new assigned package
        await axios.post("http://localhost:5000/api/assign-package", {
          client_id: clientId,
          package_id: data.package_id,
          vehicles: data.vehicles,
          total_amount: data.total_amount,
        });
        alert("Package assigned!");
      }
      fetchAssigned();
      setFormData({ ...formData, [clientId]: {} });
    } catch (err) {
      console.error(err);
      alert("Failed to assign package");
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      ...formData,
      [item.client_id]: {
        package_id: item.package_id,
        vehicles: item.vehicles,
        price_per_vehicle:
          packages.find((p) => p.package_id === item.package_id)
            ?.price_per_vehicle || 0,
        total_amount: item.total_amount,
      },
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this assigned package?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/assigned-package/${id}`);
      fetchAssigned();
      alert("Deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  return (
    <div>
      <Header/>
    

    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "15px" }}>Assign Package</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "30px",
              boxShadow: "0 0 10px #ccc",
            }}
          >
            <thead style={{ background: "#f2f2f2" }}>
              <tr>
                <th style={{ padding: "8px" }}>Client Name</th>
                <th>Package</th>
                <th>Price / Vehicle</th>
                <th>Vehicles</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td>{client.client_name}</td>
                  <td>
                    <select
                      value={formData[client.id]?.package_id || ""}
                      onChange={(e) =>
                        handlePackageChange(client.id, e.target.value)
                      }
                      style={{ padding: "6px", borderRadius: "5px" }}
                    >
                      <option value="">Select Package</option>
                      {packages.map((pkg) => (
                        <option key={pkg.package_id} value={pkg.package_id}>
                          {pkg.package_name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>₹{formData[client.id]?.price_per_vehicle || 0}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={formData[client.id]?.vehicles || ""}
                      onChange={(e) =>
                        handleVehicleChange(client.id, Number(e.target.value))
                      }
                      style={{
                        width: "70px",
                        padding: "4px",
                        borderRadius: "5px",
                      }}
                    />
                  </td>
                  <td>₹{formData[client.id]?.total_amount || 0}</td>
                  <td>
                    <button
                      onClick={() => handleAssign(client.id)}
                      style={{
                        padding: "6px 12px",
                        background: editingId ? "#FFA500" : "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {editingId ? "Update" : "Assign"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ marginBottom: "10px" }}>Assigned Packages</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 0 10px #ccc",
            }}
          >
            <thead style={{ background: "#f2f2f2" }}>
              <tr>
                <th style={{ padding: "8px" }}>Client Name</th>
                <th>Package Name</th>
                <th>Vehicles</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assigned.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    No assigned packages
                  </td>
                </tr>
              ) : (
                assigned.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>{item.client_name}</td>
                    <td>{item.package_name}</td>
                    <td>{item.vehicles}</td>
                    <td>₹{item.total_amount}</td>
                    <td>{new Date(item.assigned_date).toLocaleDateString()}</td>
                    <td>
                      {item.valid_till
                        ? new Date(item.valid_till).toLocaleDateString()
                        : "-"}
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(item)}
                        style={{
                          marginRight: "6px",
                          padding: "4px 8px",
                          background: "#FFA500",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        style={{
                          padding: "4px 8px",
                          background: "#E53935",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
    </div>
  );
}
