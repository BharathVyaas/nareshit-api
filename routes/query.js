const express = require("express");
const router = express.Router();

const queryController = require("../controllers/query");

router.get("/programminglanguages", queryController.getProgLangs);
router.get("/view-moduleNames", queryController.getModuleNames);
router.get("/view-topicNames/:ModuleID", queryController.getTopicNames);
router.get("/view-subTopicNames/:TopicID", queryController.getSubTopicNames);
router.get("/questions", queryController.getQuestions);

module.exports = router;
