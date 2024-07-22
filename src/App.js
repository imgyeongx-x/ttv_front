import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Download from "./pages/Download";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Done from "./pages/Done";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </Router>
  );
};

export default App;
