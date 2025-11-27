import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";

import SuperAdminDashboard from "./components/SuperAdmin/SuperAdminDashboard";
import PageLayout from "./components/SuperAdmin/PageLayout";
import Footer from "./components/Footer/Footer";
import { Document } from "./components/SuperAdminPages/Document";
import ModulePage from "./components/SuperAdmin/ModulePage";
import { Spare } from "./components/SuperAdminPages/Spare";
import { Tyre } from "./components/SuperAdminPages/Tyre";
import { Fuel } from "./components/SuperAdminPages/Fuel";
import { Expenses } from "./components/SuperAdminPages/Expenses";
import { Maintenance } from "./components/SuperAdminPages/Maintenance";
import { Finance } from "./components/SuperAdminPages/Finance";
import { Tripsheet } from "./components/SuperAdminPages/Tripsheet";
import { VehicleHiring } from "./components/SuperAdminPages/VehicleHiring";
import { VehicleOnbording } from "./components/SuperAdminPages/VehicleOnbording";
import { Marketplace } from "./components/SuperAdminPages/MarketPlace";
import { VehicleIncome } from "./components/SuperAdminPages/VehicleIncome";
import { MasterSetup } from "./components/SuperAdminPages/MasterSetup";
import { Fastag } from "./components/SuperAdminPages/FasTag";
import CreateClient from "./components/clients/CreateClient";
import ClientList from "./components/clients/ClientList";
import CreatePackage from "./components/packages/CreatePackage";
import PackageList from "./components/packages/PackageList";
import AssignPackage from "./components/packages/AssignPackage";
import AdminDashboard from "./components/SuperAdmin/AdminDashBoard";
import ComapanyRegistration from "./components/clients/ComapanyRegistration";
import CompanyList from "./components/clients/CompanyList";
import ClientForm from "./components/clients/ClientForm";
import ClientLoginForm from "./components/clients/ClientLoginForm";
import ClientMasterList from "./components/clients/ClientMasterList";
import CreateUser from "./components/users/CreateUser";
import InquiryList from "./components/inquaries/inquiryList";
import InquiryForm from "./components/inquaries/InquiryForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default Page */}
          <Route path="/form" element={<Form />} />

          {/* Dashboard Page */}

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            path="/superadmin-dashboard"
            element={<SuperAdminDashboard />}
          />
          <Route path="/:id/:type" element={<PageLayout />} />
          <Route path="/admin/document" element={<Document />} />
          <Route path="/admin/spare" element={<Spare />} />
          <Route path="/admin/tyre" element={<Tyre />} />
          <Route path="/admin/fuel" element={<Fuel />} />
          <Route path="/admin/expenses" element={<Expenses />} />
          <Route path="/admin/maintenance" element={<Maintenance />} />
          <Route path="/admin/finance" element={<Finance />} />
          <Route path="/admin/tripsheet" element={<Tripsheet />} />
          <Route path="/admin/vehicle-hiring" element={<VehicleHiring />} />
          <Route
            path="/admin/vehicle-onboarding"
            element={<VehicleOnbording />}
          />
          <Route path="/admin/marketplace" element={<Marketplace />} />
          <Route path="/admin/vehicle-income" element={<VehicleIncome />} />
          <Route path="/admin/master-setup" element={<MasterSetup />} />
          <Route path="/admin/fastag" element={<Fastag />} />
          {/* <Route path="/admin/create-client" element={<CreateClient/>} /> */}
          <Route path="/admin/create-client" element={<ClientForm />} />

          {/* <Route path="/admin/client-list" element={<ClientList />} /> */}
          <Route path="/admin/client-list" element={<ClientMasterList/>} /> 
          <Route path="/admin/create-package" element={<CreatePackage />} />
          <Route path="/admin/manage-package" element={<PackageList />} />
          <Route path="/admin/assign-package" element={<AssignPackage />} />
          <Route
            path="/admin/company-register"
            element={<ComapanyRegistration />}
          />
          <Route path="/admin/company-list" element={<CompanyList />} />
          <Route path="/" element={<ClientLoginForm />} />
          <Route path="/admincreate-user" element={<CreateUser/>} />
          <Route path="/admin/inquiry-from" element={<InquiryForm/>} />
          <Route path="/admin/inquiry-list" element={<InquiryList/>} />
       
         

          {/* Dynamic Module Page */}
          <Route path="/module/:moduleName" element={<ModulePage />} />

          {/* Optional: Dynamic Sub Pages */}
          <Route
            path="/module/:moduleName/:subPage"
            element={<div>Coming Soon...</div>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
