

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const buttons = [
    { id: 1, label: "Document", path: "/admin/document" },
    { id: 2, label: "Spare", path: "/admin/spare" },
    { id: 3, label: "Tyre", path: "/admin/tyre" },
    { id: 4, label: "Fuel", path: "/admin/fuel" },
    { id: 5, label: "Expenses", path: "/admin/expenses" },
    { id: 6, label: "Maintenance", path: "/admin/maintenance" },
    { id: 7, label: "Finance", path: "/admin/finance" },
    { id: 8, label: "Tripsheet", path: "/admin/tripsheet" },
    { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring" },
    { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding" },
    { id: 11, label: "Marketplace", path: "/admin/marketplace" },
    { id: 12, label: "Vehicle Income", path: "/admin/vehicle-income" },
    
    { id: 13, label: "Master Setup", path: "/admin/master-setup" },
    { id: 14, label: "FASTag", path: "/admin/fastag" },
 
    { id: 15, label: "Create & Manage User", path: "/admin/create-list" },
    { id: 16, label: "Assign Package", path: "/admin/assign-package" },
    // { id: 17, label: "Package Create & Manage", path: "/admin/manage-package" },
    { id: 18, label: "All Reports", path: "/admin/reports" },
    { id: 18, label: "Profile", path: "/admin/profile" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* <h1 className="text-center text-xl font-bold p-2 text-white bg-gradient-to-t from-orange-600 via-orange-600 to-orange-600">
         Admin Dashboard
      </h1> */}

      <div className="grid grid-cols-3 md:grid-cols-7 gap-1 p-2">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => navigate(btn.path)}
            className="w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 
                       h-28 border-4 border-gray-100 text-white font-bold 
                       rounded-lg shadow-2xl text-sm"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
