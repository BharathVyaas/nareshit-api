const express = require("express");
const router = express.Router();

const getAssessmentList = require("../controllers/assessment");

router.get("/view-assessments", getAssessmentList);

module.exports = router;
