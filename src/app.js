import express from "express"
import cors from "cors"

const app = express();


app.use(express.json({limit:"200kb"}));
app.use(express.urlencoded({limit:"200kb" , extended:true}));
app.use(express.static("public"));


app.use(
  cors({
    // origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // frontend URL
    origin: "https://online-test-xi.vercel.app", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you're sending cookies/auth
  })
);


app.get("/" , (req , res)=>{
    res.send("786-Online-Test")
})

// 
import QuestionRouter from "./routes/question.routes.js";
import userRouter from "./routes/user.routes.js";

app.use("/question" , QuestionRouter)
app.use("/user" , userRouter)


export default app;