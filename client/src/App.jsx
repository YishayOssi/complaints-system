import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminComplaintsPage from "./pages/AdminComplaintsPage";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/submit" element={<SubmitComplaintPage/>}/>
        <Route path="/admin/login" element={<AdminLoginPage/>}/>
        <Route path="/admin" element={<AdminComplaintsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
