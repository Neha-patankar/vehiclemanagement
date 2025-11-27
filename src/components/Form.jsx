import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");

  const [filters, setFilters] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    gender: "",
    mother: "",
    father: "",
  });

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", {
        name,
        email,
        mobile,
        gender,
        mother,
        father,
      });
      alert("User Added Successfully");
      setName("");
      setEmail("");
      setMobile("");
      setGender("");
      setMother("");
      setFather("");
      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Error saving user");
    }
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter users
  const filteredUsers = users.filter((u) => {
    return (
      (filters.id === "" || u.id.toString().includes(filters.id)) &&
      (filters.name === "" || u.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.email === "" || u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.mobile === "" || u.mobile.includes(filters.mobile)) &&
      (filters.gender === "" || u.gender.toLowerCase().includes(filters.gender.toLowerCase())) &&
      (filters.mother === "" || u.mother.toLowerCase().includes(filters.mother.toLowerCase())) &&
      (filters.father === "" || u.father.toLowerCase().includes(filters.father.toLowerCase()))
    );
  });

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add User</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="Mother's Name" value={mother} onChange={(e) => setMother(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="Father's Name" value={father} onChange={(e) => setFather(e.target.value)} required style={{ flex: "1 1 200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />

        <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "#fff", cursor: "pointer" }}>Save</button>
      </form>

      {/* Filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {Object.keys(filters).map((key) => (
          <input key={key} name={key} placeholder={`Filter by ${key.charAt(0).toUpperCase() + key.slice(1)}`} value={filters[key]} onChange={handleFilterChange} style={{ flex: "1 1 120px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
        ))}
      </div>

      {/* Users Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["ID", "Name", "Email", "Mobile", "Gender", "Mother", "Father"].map((h) => (
              <th key={h} style={{ border: "1px solid #ccc", padding: "10px" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.mobile}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.gender}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.mother}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{u.father}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
