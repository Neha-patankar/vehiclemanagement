// src/components/SuperAdminLayout.jsx

import React from "react";

export default function SuperAdminLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Common Heading */}
      <h1 className="text-center text-xl font-bold p-2 text-white bg-gradient-to-t from-orange-500 via-yellow-500 to-orange-500">
        {title}
      </h1>

      {/* Page Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}
