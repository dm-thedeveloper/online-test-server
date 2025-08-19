import express from "express";
import { createQuestion, getAllQuestions } from "../controllers/question.controller.js";

const QuestionRouter = express.Router();

QuestionRouter.route("/create").post(createQuestion);
QuestionRouter.route("/questions").get(getAllQuestions);


export default QuestionRouter;
