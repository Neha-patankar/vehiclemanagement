import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ModulePage() {
  const navigate = useNavigate();
  const { moduleName } = useParams();

  const moduleOptions = {
    Document: [
      { label: "Setup", path: "setup" },
      { label: "Transaction", path: "transaction" },
      { label: "Report", path: "report" },
      { label: "Category Master", path: "category-master" },
      { label: "Upload Docs", path: "upload" },
    ],

    Spare: [
      { label: "Spare Entry", path: "entry" },
      { label: "Spare Issue", path: "issue" },
      { label: "Spare Report", path: "report" },
      { label: "Spare Master", path: "master" },
    ],

    Tyre: [
      { label: "Tyre Change", path: "change" },
      { label: "Tyre Stock", path: "stock" },
      { label: "Tyre Report", path: "report" },
      { label: "Tyre Master", path: "master" },
    ],

    Fuel: [
      { label: "Fuel Entry", path: "entry" },
      { label: "Fuel Usage", path: "usage" },
      { label: "Fuel Report", path: "report" },
      { label: "Fuel Master", path: "master" },
    ],

    Expenses: [
      { label: "Daily Expense", path: "daily" },
      { label: "Monthly Expense", path: "monthly" },
      { label: "Expense Report", path: "report" },
      { label: "Expense Master", path: "master" },
    ],

    Maintenance: [
      { label: "Service Entry", path: "entry" },
      { label: "Service Due", path: "due" },
      { label: "Maintenance Report", path: "report" },
      { label: "Maintenance Master", path: "master" },
    ],

    Finance: [
      { label: "Loan Entry", path: "loan" },
      { label: "EMI Report", path: "emi-report" },
      { label: "Finance Master", path: "master" },
    ],

    Tripsheet: [
      { label: "New Trip", path: "new" },
      { label: "Trip History", path: "history" },
      { label: "Trip Report", path: "report" },
    ],

    "Vehicle Hiring": [
      { label: "New Hiring", path: "new" },
      { label: "Hiring History", path: "history" },
      { label: "Hiring Report", path: "report" },
    ],

    "Vehicle Onboarding": [
      { label: "Add Vehicle", path: "add" },
      { label: "Vehicle List", path: "list" },
      { label: "Onboarding Report", path: "report" },
    ],

    Marketplace: [
      { label: "Add Product", path: "add" },
      { label: "Product List", path: "list" },
      { label: "Orders", path: "orders" },
    ],

    "Vehicle Income": [
      { label: "Income Entry", path: "entry" },
      { label: "Income Report", path: "report" },
    ],

    Setup: [
      { label: "Company Setup", path: "company" },
      { label: "Branch Setup", path: "branch" },
      { label: "User Setup", path: "user" },
    ],

    FASTag: [
      { label: "FASTag Entry", path: "entry" },
      { label: "FASTag Recharge", path: "recharge" },
      { label: "FASTag Report", path: "report" },
    ],

    "Master Setup": [
      { label: "Country Master", path: "country" },
      { label: "State Master", path: "state" },
      { label: "City Master", path: "city" },
      { label: "Vehicle Type Master", path: "vehicle-type" },
    ],
  };

  const options = moduleOptions[moduleName] || [];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{moduleName} Dashboard</h1>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {options.length === 0 && (
          <p className="text-red-600">No Options Found</p>
        )}

        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() =>
              navigate(`/module/${moduleName}/${opt.path}`)
            }
            className="w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 
                       h-24 border-4 border-gray-100 text-white font-bold 
                       rounded-lg shadow-2xl text-sm"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
