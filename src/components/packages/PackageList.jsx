import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../SuperAdmin/Header";

function PackageList() {
  const [packages, setPackages] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [editPkg, setEditPkg] = useState(null);

  const [newPkg, setNewPkg] = useState({
    package_name: "",
    price_per_vehicle: "",
  });

  // Fetch packages
  const loadPackages = async () => {
    const res = await axios.get("http://localhost:5000/api/packages");
    setPackages(res.data);
  };

  useEffect(() => {
    loadPackages();
  }, []);

  // Create Package
  const createPackage = async () => {
    await axios.post("http://localhost:5000/api/package", newPkg);
    setShowCreate(false);
    setNewPkg({ package_name: "", price_per_vehicle: "" });
    loadPackages();
  };

  // Delete
  const deletePackage = async (id) => {
    if (!window.confirm("Delete this package?")) return;
    await axios.delete(`http://localhost:5000/api/package/${id}`);
    loadPackages();
  };

  // Update
  const updatePackage = async () => {
    await axios.put(`http://localhost:5000/api/package/${editPkg.package_id}`, {
      package_name: editPkg.package_name,
      price_per_vehicle: editPkg.price_per_vehicle,
    });
    setEditPkg(null);
    loadPackages();
  };

  return (
    <div className="p-0">
      <Header/>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 p-2 mb-5 text-white text-center text-2xl font-bold relative rounded-lg shadow-lg">
        All Packages

        <button
          onClick={() => setShowCreate(true)}
          className="absolute right-5 top-2.5 px-4 py-2 bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900  text-white text-nowrap  rounded-md cursor-pointer text-sm font-bold hover:bg-gray-100 transition-colors"
        >
          + Create Package
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border-collapse shadow-md">
        <thead className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900  text-white font-bold">
          <tr>
            <th className="p-3 border border-gray-300 font-bold">ID</th>
            <th className="p-3 border border-gray-300 font-bold">Package Name</th>
            <th className="p-3 border border-gray-300 font-bold">Price Per Vehicle</th>
            <th className="p-3 border border-gray-300 font-bold">Created At</th>
            <th className="p-3 border border-gray-300 font-bold">Actions</th>
          </tr>
        </thead>

        <tbody>
          {packages.map((p) => (
            <tr key={p.package_id} className="hover:bg-gray-50 transition-colors">
              <td className="p-3 border border-gray-300">{p.package_id}</td>
              <td className="p-3 border border-gray-300">{p.package_name}</td>
              <td className="p-3 border border-gray-300">{p.price_per_vehicle}</td>
              <td className="p-3 border border-gray-300">{new Date(p.created_at).toLocaleString()}</td>

              <td className="p-3 border border-gray-300">
                <button
                  onClick={() => setEditPkg(p)}
                  className="px-3 py-1.5 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePackage(p.package_id)}
                  className="px-3 py-1.5 ml-2.5 bg-red-500 text-white cursor-pointer rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE MODAL */}
      {showCreate && (
        <Modal>
          <h3 className="text-xl font-bold mb-4">Create New Package</h3>

          <input
            type="text"
            placeholder="Package Name"
            value={newPkg.package_name}
            onChange={(e) =>
              setNewPkg({ ...newPkg, package_name: e.target.value })
            }
            className="w-full my-2.5 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="number"
            placeholder="Price Per Vehicle"
            value={newPkg.price_per_vehicle}
            onChange={(e) =>
              setNewPkg({ ...newPkg, price_per_vehicle: e.target.value })
            }
            className="w-full my-2.5 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button 
            onClick={createPackage} 
            className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer mr-2.5 hover:bg-green-700 transition-colors"
          >
            Create
          </button>
          <button 
            onClick={() => setShowCreate(false)} 
            className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </Modal>
      )}

      {/* EDIT MODAL */}
      {editPkg && (
        <Modal>
          <h3 className="text-xl font-bold mb-4">Edit Package</h3>

          <input
            type="text"
            value={editPkg.package_name}
            onChange={(e) =>
              setEditPkg({ ...editPkg, package_name: e.target.value })
            }
            className="w-full my-2.5 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="number"
            value={editPkg.price_per_vehicle}
            onChange={(e) =>
              setEditPkg({
                ...editPkg,
                price_per_vehicle: e.target.value,
              })
            }
            className="w-full my-2.5 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button 
            onClick={updatePackage} 
            className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer mr-2.5 hover:bg-green-700 transition-colors"
          >
            Save
          </button>
          <button 
            onClick={() => setEditPkg(null)} 
            className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </Modal>
      )}
    </div>
  );
}

export default PackageList;

// MODAL Component
function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 flex justify-center items-center z-10">
      <div className="w-96 bg-white p-5 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}