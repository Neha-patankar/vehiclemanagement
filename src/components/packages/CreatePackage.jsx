import { useState } from "react";
import axios from "axios";
import PackageList from "./PackageList";
import Header from "../SuperAdmin/Header";

function CreatePackage() {
  const [form, setForm] = useState({
    package_name: "",
    price_per_vehicle: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/package", form);
      alert(`Package Created! ID = ${res.data.package_id}`);
      setForm({ package_name: "", price_per_vehicle: "" });
    } catch (error) {
      console.log(error);
      alert("Error creating package");
    }
  };

  return (
    <div>
    <Header/>
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Create Package</h2>

      <input
        type="text"
        name="package_name"
        placeholder="Package Name"
        value={form.package_name}
        onChange={handleChange}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
      />

      <input
        type="number"
        name="price_per_vehicle"
        placeholder="Price Per Vehicle"
        value={form.price_per_vehicle}
        onChange={handleChange}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px",
          background: "green",
          color: "white",
          marginTop: "10px",
        }}
      >
        Create Package
      </button>
      <PackageList/>
    </div>
    </div>
  );
}

export default CreatePackage;
