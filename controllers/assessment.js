const AssessmentHandler = require("../models/assessment");

const getAllAssessments = async (req, res) => {
  const assessments = await AssessmentHandler.getAllAssessments();

  res.status(200).json({ assessments });
};

module.exports = getAllAssessments;
