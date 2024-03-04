const express = require("express");
const router = express.Router();

const programController = require("../controllers/program");

router.get("/compile", programController.compile);

module.exports = router;
