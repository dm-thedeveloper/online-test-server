import Question from "../model/question.model.js";
import { APIREsponse } from "../utils/apiresponse.utils.js";

export const createQuestion = async (req, res) => {
  try {
    let questionData = { ...req.body };

    // 🟢 Remove unwanted fields based on type
    if (questionData.type === "Descriptive") {
      delete questionData.optionA;
      delete questionData.optionB;
      delete questionData.optionC;
      delete questionData.optionD;
      delete questionData.correctOption;
    }

    if (questionData.type === "MCQS") {
      delete questionData.descriptiveAnswer;
    }

    // Create new question
    const newQuestion = await Question.create(questionData);

    // Success response
    const response = new APIREsponse(
      "Question created successfully",
      newQuestion,
      201
    );

    return res.status(response.statuscode).json(response);
  } catch (error) {
    console.error("Error creating question:", error.message);

    // Failure response
    const response = new APIREsponse(
      "Failed to create question",
      { error: error.message },
      400
    );

    return res.status(response.statuscode).json(response);
  }
};


// ✅ Controller to get all questions

export const getAllQuestions = async (req, res) => {
  
  try {
    const questions = await Question.find().sort({ createdAt: -1 });

    const response = new APIREsponse(
      "All questions fetched successfully",
      questions,
      200
    );

    return res.status(response.statuscode).json(response);
  } catch (error) {
    console.error("Error fetching questions:", error.message);

    const response = new APIREsponse(
      "Failed to fetch questions",
      { error: error.message },
      500
    );

    return res.status(response.statuscode).json(response);
  }
};
