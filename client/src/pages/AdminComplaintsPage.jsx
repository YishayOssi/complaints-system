import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Navigate } from "react-router";
import ComplaintsTable from "../components/ComplaintsTable";
import { getAllComplaintsApi } from "../api/complaintsApi";

export default function AdminComplaintsPage() {
  const token = localStorage.getItem("token");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
        async function loadData() {
            if (token) {
                const data = await getAllComplaintsApi(token);
                setComplaints(data);
            }
        }
        loadData();
    }, [token]);

  return (
    <>
    {
        token ? <Layout title="Admin Complaints Page">
            <ComplaintsTable complaints={complaints}/>
        </Layout> 
        : <Navigate  to={"/admin/login"} replace/>
    }
    </>
  );
}
