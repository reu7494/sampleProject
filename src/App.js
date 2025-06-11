import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ListLogin } from "./ListLogin";
import { ListLogout } from "./ListLogout";
import { SignUp } from "./SignUp";
import { SignOff } from "./SignOff";
import { MainBoard } from "./MainBoard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<ListLogin />} />
      <Route path="/logout" element={<ListLogout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signoff" element={<SignOff />} />
      <Route path="/mainboard" element={<MainBoard />} />
    </Routes>
  );
}
