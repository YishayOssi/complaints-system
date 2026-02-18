import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { handleSendComplaint } from "../api/complaintsApi";
import { Link, useNavigate } from "react-router";


export default function SubmitComplaintPage() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("")
    const [message, setMessage] = useState("")
    const [statusSend, setStatusSend] = useState("")
    

  async function hendleSubmit(e) {
    // מונע רפרוש מיותר של הטופס
    e.preventDefault();
    const data = await handleSendComplaint({ category, message })
    setStatusSend(data);

    setTimeout(()=>{
        navigate("/")
    }, 3000)

  }

  return (
    <form onSubmit={hendleSubmit}>
      <Layout title="Submit Complaint Page">
        <h2>שליחת תלונות אנונימיות</h2>
        <label htmlFor="category">תחום התלונה:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="food">אוכל</option>
          <option value="equipment">ציוד</option>
          <option value="Commands">פקודות</option>
          <option value="other">אחר</option>
        </select>

        <h2>תוכן התלונה:</h2>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">שליחה</button>
        <h3>{statusSend}</h3>
      </Layout>
    </form>
  );
}
