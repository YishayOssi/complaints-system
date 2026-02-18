import React from "react";
import { Layout } from "../components/Layout.jsx";
import { Link } from "react-router";

export default function HomePage() {

  return (
    <Layout title="Home Page">
      <div className="card">
        <h2>תיבת תלונות אנונימיות בבסיס צבאי</h2>
        <p>שלחו תלונה בצורה אנונימית ופשוטה</p>
         
        <Link to={"/submit"}> שליחת תלונה</Link>
      </div>

      <div className="card admin">
        <h3>מפקדים בלבד</h3>
        <Link to={"/admin/login"}>כניסה לאדמין</Link>
      </div>
    </Layout>
  );
}

