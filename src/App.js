import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ListLogin } from "./ListLogin";
import { SignUp } from "./SignUp";
import { MainBoard } from "./MainBoard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<ListLogin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mainboard" element={<MainBoard />} />
    </Routes>
  );
}
