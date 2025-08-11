// src/components/UserForm.jsx
import React, { useState, useEffect } from "react";
import "@styles/UserForm.scss"

export default function UserForm({ mode = "create", initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        password: initialData.password || "",
      });
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="user-form-container">
      <a href="#" className="back-link">&lt; Quay lại</a>
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>{mode === "edit" ? "Chỉnh sửa người dùng" : "Thêm mới người dùng"}</h2>
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{mode === "edit" ? "Lưu" : "Tạo"}</button>
      </form>
    </div>
  );
}
