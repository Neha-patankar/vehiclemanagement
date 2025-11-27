import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const moduleButtons = ["setup", "transaction", "report"];

export default function PageLayout() {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(type); 

  const handlePageChange = (page) => {
    setActivePage(page);
    navigate(`/${id}/${page}`);
  };

  return (
    <div>
       <h1 className="text-center text-xl font-bold p-2 text-white bg-gradient-to-t from-orange-500 via-yellow-500 to-orange-500">
        Super Admin Dashboard
      </h1>
    <div className="p-4">
       

      {/* HEADER */}
      <h1 className="text-xl font-bold mb-2">Module ID: {id}</h1>
      <h2 className="text-lg font-semibold capitalize mb-4">
        Current Page: {activePage}
      </h2>

      {/* --- 3 BUTTONS SAME AS DROPDOWN --- */}
      <div className="flex gap-3 mb-5">
        {moduleButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => handlePageChange(btn)}
            className={`w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900 
                       h-28 border-4 border-gray-100 text-white font-bold 
                       rounded-lg shadow-2xl text-sm
             ${activePage === btn ? "bg-blue-700 text-white" : "bg-gray-200"}`}
          >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
          </button>
        ))}
      </div>

      {/* --- PAGE CONTENT AREA --- */}
      <div className="mt-4 p-3 border rounded-lg bg-white shadow">

        {activePage === "setup" && (
          <p className="font-medium text-black">Setup Page Content...</p>
        )}

        {activePage === "transaction" && (
          <p className="font-medium text-black">Transaction Page Content...</p>
        )}

        {activePage === "report" && (
          <p className="font-medium text-black">Report Page Content...</p>
        )}
      </div>
      </div>
    </div>
  );
}
