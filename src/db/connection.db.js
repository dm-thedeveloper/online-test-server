import mongoose from "mongoose";
// import { dbName } from "../constants.js";

export const DBConnection = async ()=>{
    try {
        // console.log(chalk.yellow("\t\t\t DataBase Connecting............"));
        console.log("........");
        
        const db = await mongoose.connect(`${process.env.DB_URI}/OnlineTest`);
        console.log(" ** Data Base Connected Success Fully !!");
        console.log("Host : ", db.connection.host);
        console.log("Name : ", db.connection.name);
    } catch (error) {
        console.log(":) Data Base Connection Failed :))" , error);   
    }
}