const BASE_URL = "http://localhost:3010";

export async function handleSendComplaint(complaint){
 const res = await fetch(`${BASE_URL}/api/complaints`, {
      method: "post",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(complaint)
});
    const data = await res.json();
    return data
}


export async function handleCheckPassword(password){
    const res = await fetch(`${BASE_URL}/api/admin/login`, {
       method: "post", 
       headers: {"content-type": "application/json"},
       body: JSON.stringify(password)
    })
    const data = await res.json();
    return data
}


export async function getAllComplaintsApi(token) {
    try {
        const res = await fetch(`${BASE_URL}/api/complaints`, {
            method: "GET",
            headers: {
                "authorization": token 
            }
        });
        return await res.json();
    } catch (error) {
        console.error("Error fetching complaints:", error);
        return [];
    }
}
