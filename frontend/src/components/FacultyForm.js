import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FacultyForm.css";

const FacultyForm = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    eid: "",
    email: "",
    department: "",
    designation: "",
    mobile: "",
    address: "",
    highestQualification: "",
    experience: "",
    expertise: "",
    researchProfileLinks: "",
    password: "",
    confirmPassword: "",
  });

  const [formStep, setFormStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form data submitted: ", formData);
  // };

  const nextForm = () => setFormStep(2);
  const prevForm = () => setFormStep(1);

  const onLogin = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("eid", formData.eid);
    formdata.append("password", formData.password);
    formdata.append("department", formData.department);
    formdata.append("designation", formData.designation);
    formdata.append("mobile", formData.mobile);
    formdata.append("address", formData.address);
    formdata.append("highestQualification", formData.highestQualification);
    // formdata.append("designation", formData.designation);
    formdata.append("experience", formData.experience);
    formdata.append("expertise", formData.expertise);
    formdata.append("researchProfileLinks", formData.researchProfileLinks);
    formdata.append("image", image);
    console.log(formdata);
    const response = await axios.post(
      "http://localhost:4000/api/user/register",
      formdata
    );
    if (response.data.success) {
      navigate("/");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="form-container">
      {formStep === 1 ? (
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>
          <div className="form-group">
            <label>Employee Id</label>
            <input
              type="text"
              name="eid"
              value={formData.eid}
              onChange={handleChange}
              placeholder="Enter employee id"
            />
          </div>
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
          {/* Re-enter password field */}
          <div className="form-group">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </div>
          <div className="form-group">
            <label>Department Name</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department name"
            />
          </div>

          <div className="form-group">
            <label>Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="form-group">
            <label>Upload your photograph</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
            />
          </div>
          <button className="submit-button" type="button" onClick={nextForm}>
            Next
          </button>
        </form>
      ) : (
        // Second form (Picture 2)

        <form onSubmit={onLogin}>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter designation"
            />
          </div>
          <div className="form-group">
            <label>Highest Qualification</label>
            <input
              type="text"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              placeholder="Enter highest qualification"
            />
          </div>
          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter years of experience"
            />
          </div>
          <div className="form-group">
            <label>Areas of Expertise</label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              placeholder="Enter areas of expertise"
            />
          </div>
          <div className="form-group">
            <label>Research Publications (Profile Links)</label>
            <input
              type="text"
              name="researchProfileLinks"
              value={formData.researchProfileLinks}
              onChange={handleChange}
              placeholder="Enter profile links"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" />
            <label>
              I agree to all the terms and conditions of the faculty 360.
            </label>
          </div>
          <div className="back-submit">
            <button className="submit-button" type="button" onClick={prevForm}>
              Back
            </button>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FacultyForm;
