import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FacultyForm.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data : ", formData);
    const response = await axios.post(
      "http://localhost:4000/api/user/login",
      formData
    );
    console.log(response.data.success);
    if (response.data.success) {
      navigate("/");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email id"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
      <div className="form-group forgot-password">
        <a href="#">Forgot Password?</a>
        <Link to="/register">
          <a href="#">Not yet registered?Ceate Account</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
