import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListLogin, Home, MainBoard, Signup } from "./ListLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<ListLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainBoard" element={<MainBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
