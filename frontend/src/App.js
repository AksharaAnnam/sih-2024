import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FacultyForm from "./components/FacultyForm";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<FacultyForm />}></Route>
      </Routes>
    </div>
  );
};

export default App;
