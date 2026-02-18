import React from "react";
import { Layout } from "../components/Layout";
import { Navigate } from "react-router";

export default function AdminComplaintsPage() {
  const token = localStorage.getItem("token");

  return (
    <>
    {
        token ? <Layout title="Admin Complaints Page">fdfdgfsg</Layout> 
        : <Navigate  to={"/admin/login"} replace/>
    }
        </>
  );
}
