import { createComplaintServices, checkPassword, getAllComplaintsService } from "../services/complaints.service.js"


export async function createComplaint(req, res){
    const sendComplaint = await createComplaintServices(req.body)
    if(sendComplaint){
        res.json("התלונה נשלחה בהצלחה...")
    }
    else{
        res.json("אופס..., התלונה לא נשלחה")
    }
}


export function adminLogin(req, res){
    const {password} = req.body
    const token = checkPassword(password)
    if(token){
        return res.status(200).json({ message: "אימות הצליח", token })
    }
    else{
        return res.status(401).json({ message: "האימות נכשל!" })
    }
}


export async function getAllComplaints(req, res) {
    try {
        const complaints = await getAllComplaintsService();
        res.status(200).json(complaints); 
    } catch (err) {
        res.status(500).json({ message: "שגיאה במשיכת התלונות" });
    }
}