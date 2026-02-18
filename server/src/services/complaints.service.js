import jwt from "jsonwebtoken"
import { writeData, readData } from "../db/dall.js"
import {config} from "dotenv";
config()


export async function createComplaintServices(complaint){
    const send = await writeData(complaint)
    return send
}


export function checkPassword(password){
    if(password == process.env.PASSWORD_ADMIN){
       const token = jwt.sign({role:"admin"},process.env.PRIVIT_JWT)
       return token
    }
    return null
}



export async function getAllComplaintsService() {
    const data = await readData();
    return data.reverse()
}