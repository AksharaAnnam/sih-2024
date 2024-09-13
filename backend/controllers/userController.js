import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import fs from "fs";

//login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register User
const registerUser = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const {
    name,
    email,
    password,
    eid,
    department,
    designation,
    mobile,
    address,
    highestQualification,
    experience,
    expertise,
    researchProfileLinks,
  } = req.body;

  try {
    //Checking if any user exists with the email already
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //Valid email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //valid password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing the user password
    const salt = await bcrypt.genSalt(10); //range from 5 to 15
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      eid: eid,
      department: department,
      designation: designation,
      mobile: mobile,
      address: address,
      highestQualification: highestQualification,
      experience: experience,
      expertise: expertise,
      researchProfileLinks: researchProfileLinks,
      image: image_filename,
    });

    const user = await newUser.save();
    // const token = createToken(user._id);
    // res.json({ success: true, token });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };