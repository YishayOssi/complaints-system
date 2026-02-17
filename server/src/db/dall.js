import fs from "node:fs/promises"


export async function readData(){
    try{
        
    const json = await fs.readFile("./src/db/data.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}


export async function writeData(newComplaint){
    try{
    const newComplaintAndTime = {...newComplaint, createdAt: new Date().toISOString()}

    const data = await readData();
    data.push(newComplaintAndTime)

    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile("./src/db/data.json", jsonString)
    return true}

    catch (err){
        console.log("User entry failed!")
        return false
    }
}