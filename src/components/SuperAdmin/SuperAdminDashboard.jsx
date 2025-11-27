// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function SuperAdminDashboard() {
// // //   const navigate = useNavigate();

// // //   const buttons = [
// // //     { id: 1, label: "Document", path: "/admin/document" },
// // //     { id: 2, label: "Spare", path: "/admin/spare" },
// // //     { id: 3, label: "Tyre", path: "/admin/tyre" },
// // //     { id: 4, label: "Fuel", path: "/admin/fuel" },
// // //     { id: 5, label: "Expenses", path: "/admin/expenses" },
// // //     { id: 6, label: "Maintenance", path: "/admin/maintenance" },
// // //     { id: 7, label: "Finance", path: "/admin/finance" },
// // //     { id: 8, label: "Tripsheet", path: "/admin/tripsheet" },
// // //     { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring" },
// // //     { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding" },
// // //     { id: 11, label: "Marketplace", path: "/admin/marketplace" },
// // //     { id: 12, label: "Vehicle Income", path: "/admin/vehicle-income" },

// // //     { id: 13, label: "Master Setup", path: "/admin/master-setup" },
// // //     { id: 14, label: "FASTag", path: "/admin/fastag" },

// // //     { id: 15, label: "Create & Manage Client", path: "/admin/create-list" },
// // //     { id: 16, label: "Assign Package", path: "/admin/assign-package" },
// // //     { id: 17, label: "Package Create & Manage", path: "/admin/manage-package" },
// // //     { id: 18, label: "All Reports", path: "/admin/reports" },
// // //     { id: 18, label: "Company Registration", path: "/admin/company-list" },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-white">
// // //       <h1 className="text-center text-xl font-bold p-2 text-white bg-gradient-to-t from-orange-500 via-yellow-500 to-orange-500">
// // //         Super Admin Dashboard
// // //       </h1>

// // //       <div className="grid grid-cols-3 md:grid-cols-7 gap-1 p-2">
// // //         {buttons.map((btn) => (
// // //           <button
// // //             key={btn.id}
// // //             onClick={() => navigate(btn.path)}
// // //             className="w-full bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900
// // //                        h-28 border-4 border-gray-100 text-white font-bold
// // //                        rounded-lg shadow-2xl text-sm"
// // //           >
// // //             {btn.label}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // // Import images
// // import docIcon from "../../assets/buttons/documents.png";
// // import spareIcon from "../../assets/buttons/sparepart.png";
// // // import spareIcon3 from "../../assets/buttons/spare3.png";
// // import tyreIcon from "../../assets/buttons/tyremgmt.png";
// // import fuelIcon from "../../assets/finalbuttons/fuel.png";
// // import expensesIcon from "../../assets/finalbuttons/expense.png";
// // import hiringIcon from "../../assets/finalbuttons/hiring.png";
// // import onboardingIcon from "../../assets/finalbuttons/onboarding.png";
// // import fastagIcon from "../../assets/finalbuttons/fastag.png";

// // export default function SuperAdminDashboard() {
// //   const navigate = useNavigate();

// //   const buttons = [
// //     { id: 1, label: "Document", path: "/admin/document", icon: docIcon },
// //     { id: 2, label: "Spare", path: "/admin/spare", icon: spareIcon },
// //     // { id: 2, label: "Spare", path: "/admin/spare", icon: spareIcon3 },
// //     { id: 3, label: "Tyre", path: "/admin/tyre", icon: tyreIcon },


    
// //     { id: 4, label: "Fuel", path: "/admin/fuel", icon: fuelIcon },
// //     { id: 5, label: "Expenses", path: "/admin/expenses", icon: expensesIcon },
// //     { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring", icon: hiringIcon },
// //     { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding", icon: onboardingIcon },
// //     { id: 14, label: "FASTag", path: "/admin/fastag", icon: fastagIcon },


// //     // { id: 3, label: "Tyre", path: "/admin/tyre", icon: tyreIcon },
// //     { id: 4, label: "Fuel", path: "/admin/fuel", icon: fuelIcon },
// //     { id: 5, label: "Expenses", path: "/admin/expenses", icon: expensesIcon },
// //     { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring", icon: hiringIcon },
// //     // { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding", icon: onboardingIcon },
// //     { id: 4, label: "Fuel", path: "/admin/fuel", icon: fuelIcon },
// //     { id: 5, label: "Expenses", path: "/admin/expenses", icon: expensesIcon },
// //     { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring", icon: hiringIcon },
// //     // { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding", icon: onboardingIcon },
// //     // { id: 14, label: "FASTag", path: "/admin/fastag", icon: fastagIcon },

// //     // Buttons without icons
// //     { id: 7, label: "Finance", path: "/admin/finance" },
// //     { id: 8, label: "Tripsheet", path: "/admin/tripsheet" },
// //     { id: 11, label: "Marketplace", path: "/admin/marketplace" },
// //     // { id: 12, label: "Vehicle Income", path: "/admin/vehicle-income" },
// //     // { id: 13, label: "Master Setup", path: "/admin/master-setup" },
// //     { id: 15, label: "Create & Manage Client", path: "/admin/client-list" },
// //     { id: 16, label: "Assign Package", path: "/admin/assign-package" },
// //     { id: 17, label: "Package Create & Manage", path: "/admin/manage-package" },
// //     { id: 18, label: "All Reports", path: "/admin/reports" },
// //     { id: 19, label: "Company Registration", path: "/admin/company-list" },
// //   ];

// //   return (
// //     <div className=" bg-white">
// //       <div className="flex gap-0 justify-between">
// //         <div>
// //        <h1 className="">
// //        <img src="src/assets/finalbuttons/home.png" className="h-16 w-16"></img>
// //       </h1>
// //         </div>
// //         <div className="flex gap-0">
// //         <img src="src/assets/finalbuttons/home.png" className="h-16 w-16"></img>
// //         <img src="src/assets/finalbuttons/logout.png" className="h-16 w-16"></img>
// //         </div>
// //       </div>
// //       <h1 className="text-center text-xl font-bold p-1 text-white bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 ">
// //          Antony waste Handling cell pvt ltd
// //       </h1>

// //       <div className="grid grid-cols-3 md:grid-cols-9 gap-0 p-0">
// //         {buttons.map((btn) => (
// //           <button
// //             key={btn.id}
// //             onClick={() => navigate(btn.path)}
// //             className=""
// //           >
// //             {btn.icon && (
// //               <img
// //                 src={btn.icon}
// //                 alt={btn.label}
// //                 className=""
// //               />
// //             )}
// //             {/* {btn.label} */}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";

// // Import images
// import docIcon from "../../assets/buttons/documents.png";
// import spareIcon from "../../assets/buttons/sparepart.png";
// import tyreIcon from "../../assets/buttons/tyremgmt.png";
// import fuelIcon from "../../assets/finalbuttons/fuel.png";
// import expensesIcon from "../../assets/finalbuttons/expense.png";
// import maintenance from "../../assets/finalbuttons/maintenance.png";
// import finance from "../../assets/buttons/finance.png";
// import tripsheet from "../../assets/finalbuttons/tripsheet.png";
// import hiringIcon from "../../assets/finalbuttons/hiring.png";
// import onboardingIcon from "../../assets/buttons/onboarding.png";
// import marketplace from "../../assets/buttons/marketplace.png";
// import vehicleIncome from "../../assets/buttons/vehicleincome.png";
// import masterSetup from "../../assets/buttons/mastersetup.png";
// import fastagIcon from "../../assets/buttons/fastag.png";
// import homeIcon from "../../assets/finalbuttons/home.png";
// import logoutIcon from "../../assets/finalbuttons/logout.png";

// export default function SuperAdminDashboard() {
//   const navigate = useNavigate();

//   const iconButtons = [
//     { id: 1, label: "Document", path: "/admin/document", icon: docIcon },
//     { id: 2, label: "Spare", path: "/admin/spare", icon: spareIcon },
//     { id: 3, label: "Tyre", path: "/admin/tyre", icon: tyreIcon },
//     { id: 4, label: "Fuel", path: "/admin/fuel", icon: fuelIcon },
//     { id: 5, label: "Expenses", path: "/admin/expenses", icon: expensesIcon },
//     { id: 6, label: "Maintenance", path: "/admin/maintenance", icon: maintenance },
//     { id: 7, label: "Finance", path: "/admin/finance", icon: finance },
//     { id: 8, label: "Tripsheet", path: "/admin/tripsheet", icon: tripsheet },
//     { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring", icon: hiringIcon },
//     { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding", icon: onboardingIcon },
//     { id: 11, label: "Marketplace", path: "/admin/marketplace", icon: marketplace },
//     { id: 12, label: "Vehicle Income", path: "/admin/vehicle-income", icon: vehicleIncome },
//     { id: 13, label: "Master Setup", path: "/admin/master-setup", icon: masterSetup },
//     { id: 14, label: "FASTag", path: "/admin/fastag", icon: fastagIcon },
//   ];

//   const blueButtons = [
//     { id: 15, label: "Create & Manage Client", path: "/admin/client-list" },
//     { id: 16, label: "Assign Package", path: "/admin/assign-package" },
//     { id: 17, label: "Package Create & Manage", path: "/admin/manage-package" },
//     { id: 18, label: "All Reports", path: "/admin/reports" },
//     { id: 19, label: "Company Registration", path: "/admin/company-list" },
//   ];

//   return (
//     <div className="bg-white min-h-screen">
//       {/* TOP BAR */}
//       <div className="flex justify-between items-center px-4 py-2">
//         <img src={homeIcon} className="h-14 w-14 cursor-pointer" />

//         <div className="flex gap-4">
//           <img src={homeIcon} className="h-14 w-14 cursor-pointer" />
//           <img src={logoutIcon} className="h-14 w-14 cursor-pointer" />
//         </div>
//       </div>

//       {/* HEADING */}
//       <h1 className="text-center text-xl md:text-2xl font-bold p-2 text-white bg-orange-600">
//         Antony Waste Handling Cell Pvt Ltd
//       </h1>

//       {/* ICON BUTTONS GRID (1-14) */}
//       <div className="grid grid-cols-3 md:grid-cols-9 gap-2 p-2">
//         {iconButtons.map((btn) => (
//           <button
//             key={btn.id}
//             onClick={() => navigate(btn.path)}
//             className="rounded-xl flex flex-col items-center justify-center shadow 
//               hover:scale-105 transition-all duration-200 bg-transparent"
//           >
//             <img src={btn.icon} alt={btn.label} />
//           </button>
//         ))}
//       </div>

//       {/* BLUE BUTTONS SECTION (15-19) - Separate Div */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 mt-4">
//         {blueButtons.map((btn) => (
//           <button
//             key={btn.id}
//             onClick={() => navigate(btn.path)}
//             className="bg-blue-600 text-white rounded-xl shadow-lg 
//               hover:bg-blue-700 hover:scale-105 transition-all duration-200
//               h-24 flex items-center justify-center px-4"
//           >
//             <span className="text-sm md:text-base font-medium text-center">
//               {btn.label}
//             </span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

// Import images
import docIcon from "../../assets/finalbuttons/documents.png";
// import docIcon from "../../assets/buttons/docsmall2.png";
import spareIcon from "../../assets/finalbuttons/sparepart.png";
import tyreIcon from "../../assets/finalbuttons/tyremgmt.png";
import fuelIcon from "../../assets/finalbuttons/fuel.png";
import expensesIcon from "../../assets/finalbuttons/expense.png";
import maintenance from "../../assets/finalbuttons/maintenance.png";
import finance from "../../assets/finalbuttons/finance.png";
import tripsheet from "../../assets/finalbuttons/tripsheet.png";
import hiringIcon from "../../assets/finalbuttons/hiring.png";
import onboardingIcon from "../../assets/finalbuttons/onboarding.png";
import marketplace from "../../assets/finalbuttons/marketplace.png";
import vehicleIncome from "../../assets/finalbuttons/vehicleincome.png";
// import masterSetup from "../../assets/buttons/mastersetup.png";
import masterSetup from "../../assets/finalbuttons/mastersetup.png";
import fastagIcon from "../../assets/finalbuttons/fastag.png";


export default function SuperAdminDashboard() {
  const navigate = useNavigate();

  const iconButtons = [
    { id: 1, label: "Document", path: "/admin/document", icon: docIcon },
    { id: 2, label: "Spare", path: "/admin/spare", icon: spareIcon },
    { id: 3, label: "Tyre", path: "/admin/tyre", icon: tyreIcon },
    { id: 4, label: "Fuel", path: "/admin/fuel", icon: fuelIcon },
    { id: 5, label: "Expenses", path: "/admin/expenses", icon: expensesIcon },
    { id: 6, label: "Maintenance", path: "/admin/maintenance", icon: maintenance },
    { id: 7, label: "Finance", path: "/admin/finance", icon: finance },
    { id: 8, label: "Tripsheet", path: "/admin/tripsheet", icon: tripsheet },
    { id: 9, label: "Vehicle Hiring", path: "/admin/vehicle-hiring", icon: hiringIcon },
    { id: 10, label: "Vehicle Onboarding", path: "/admin/vehicle-onboarding", icon: onboardingIcon },
    { id: 11, label: "Marketplace", path: "/admin/marketplace", icon: marketplace },
    { id: 12, label: "Vehicle Income", path: "/admin/vehicle-income", icon: vehicleIncome },
    { id: 13, label: "Master Setup", path: "/admin/master-setup", icon: masterSetup },
    { id: 14, label: "FASTag", path: "/admin/fastag", icon: fastagIcon },
  ];

  const blueButtons = [
    { id: 15, label: "Create & Manage Client", path: "/admin/client-list" },
    { id: 16, label: "Assign Package", path: "/admin/assign-package" },
    { id: 17, label: "Package Create & Manage", path: "/admin/manage-package" },
    { id: 18, label: "All Reports", path: "/admin/reports" },
    { id: 19, label: "Company Registration", path: "/admin/company-list" },
    { id: 19, label: "Inquairy section ", path: "/admin/inquiry-list" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER COMPONENT */}
      <Header/>

      {/* HEADING */}
      {/* <h1 className="text-center text-xl md:text-2xl font-bold p-2 text-white bg-orange-600">
        Antony Waste Handling Cell Pvt Ltd
      </h1> */}

      {/* ICON BUTTONS GRID (1-14) */}
      <div className="grid grid-cols-3 md:grid-cols-9 gap-0 p-0">
        {iconButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => navigate(btn.path)}
            className=""
          >
            <img src={btn.icon} alt={btn.label} />
          </button>
        ))}
      </div>

      {/* BLUE BUTTONS SECTION (15-19) - Separate Div */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-4 mt-1">
        {blueButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => navigate(btn.path)}
            className="bg-gradient-to-r from-blue-950  via-blue-700 to-blue-950 text-white rounded-xl shadow-lg 
              hover:bg-blue-700 hover:scale-105 transition-all duration-200
              h-20 flex items-center justify-center px-4"
          >
            <span className="text-sm md:text-base font-medium text-center">
              {btn.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}