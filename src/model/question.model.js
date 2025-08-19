import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["MCQS", "Descriptive"],
      required: true,
    },
    category: {
      type: String,
    //   enum: ["MDCAT", "ECE", "GAT", "GRE"],
      required: true,
    },
    difficultyLevel: {
      type: String,
    //   enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    subject: {
      type: String,
    //   enum: ["English", "Maths", "Chemistry", "Biology", "Physics", "General Knowledge"],
      required: true,
    },
    marks: {
      type: Number,
      required: true,
      min: 1,
    },
    questionText: {
      type: String,
      required: true,
    },

    // --- Fields for MCQs ---
    optionA: { type: String },
    optionB: { type: String },
    optionC: { type: String },
    optionD: { type: String },
    correctOption: {
      type: String,
      // enum: ["A", "B", "C", "D"],
    },
    
    // --- Field for Descriptive ---
    descriptiveAnswer: { type: String },
  },
  { timestamps: true }
);

// --- Custom Validation ---
QuestionSchema.pre("save", function (next) {
  if (this.type === "MCQS") {
    if (!this.optionA || !this.optionB || !this.optionC || !this.optionD || !this.correctOption) {
      return next(new Error("MCQS must have options A, B, C, D and a correctOption"));
    }
  }


  if (this.type === "Descriptive") {
    if (!this.descriptiveAnswer) {
      return next(new Error("Descriptive question must have a descriptiveAnswer"));
    }
  }
  next();
});


const Question = mongoose.model("Question", QuestionSchema);

export default Question;
