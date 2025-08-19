import app from "./app.js";
import { DBConnection } from "./db/connection.db.js";
import dotenv from "dotenv"

dotenv.config({path:".env"})


DBConnection().then(()=>{
    app.listen(3000, ()=>{
        console.log(`app is listening http://localhost:3000`);    
    })  
})
.catch((er)=>console.log("ERROR On Index.js" ,er))
