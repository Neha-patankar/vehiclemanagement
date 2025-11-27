import React from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminLayout from "../SuperAdmin/SuperAdminLayout";

export const VehicleHiring = () => {
  const navigate = useNavigate();

  const options = [
    { label: "Setup", path: "setup" },
    { label: "Transaction", path: "transaction" },
    { label: "Report", path: "report" },
  ];

  return (
    <SuperAdminLayout title="Vehicle-Hiring Dashboard">
      <div className="grid grid-cols-8 gap-3">
        {options.map((opt) => (
          <button
            key={opt.path}
            onClick={() => navigate(`/document/${opt.path}`)}
            className="w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 
                       h-28 border-4 border-gray-100 text-white font-bold 
                       rounded-lg shadow-2xl text-sm"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </SuperAdminLayout>
  );
};
