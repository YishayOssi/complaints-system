import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useNavigate } from "react-router";
import { handleCheckPassword } from '../api/complaintsApi';

export default function AdminLoginPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [statusSend, setStatusSend] = useState("")


  async function hendleSubmit(e) {
    // מונע רפרוש מיותר של הטופס
    e.preventDefault();

    const data = await handleCheckPassword({ password });
    setStatusSend(data);

    if (data.token) {
        localStorage.setItem("token", data.token);
        setTimeout(() => {
            navigate("/admin");
        }, 2000);

    } else {
        setPassword(""); 
    }
}


    return (
    <form onSubmit={hendleSubmit}>
    <Layout title="Admin Login Page">
        <h2>כניסת אדמין</h2>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="submit">התחברות</button>
        <h3>{statusSend.message}</h3>
    </Layout>
    </form>
  )
}
