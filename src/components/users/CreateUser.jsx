import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [form, setForm] = useState({
    user_name: "",
    user_mobile: "",
  });
  const [profile_picture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("user_name", form.user_name);
    fd.append("user_mobile", form.user_mobile);
    if (profile_picture) fd.append("profile_picture", profile_picture);

    try {
      const token = localStorage.getItem("token"); // JWT token

      const { data } = await axios.post(
        "http://localhost:5000/api/users/create",
        fd,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("User Created Successfully");
      console.log(data);
    } catch (error) {
      console.log("Create User Error:", error);
      alert("Error creating user");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="User Name"
          value={form.user_name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="user_mobile"
          placeholder="Mobile"
          value={form.user_mobile}
          onChange={handleChange}
        />
        <br />

        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
