import express from "express";
import { createQuestion } from "../controllers/question.controller.js";

const QuestionRouter = express.Router();

QuestionRouter.route("/create").post(createQuestion);

export default QuestionRouter;
