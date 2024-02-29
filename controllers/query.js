const queryHandler = require("../models/query");

const getProgLangs = async (req, res) => {
  const progLangs = await queryHandler.getProgLangs();

  res.status(200).json({ programmingLanguages: progLangs });
};

const getModuleNames = async (req, res) => {
  const moduleNames = await queryHandler.getModuleNames();

  res.status(200).json({ moduleNames });
};

const getTopicNames = async (req, res) => {
  const moduleNames = await queryHandler.getTopicNames();
  console.log(req.body);
  res.status(200).json({ moduleNames });
};

const getSubTopicNames = async (req, res) => {
  const moduleNames = await queryHandler.getSubTopicNames();
  console.log(req.body);
  res.status(200).json({ moduleNames });
};

const getQuestions = async (req, res) => {
  const moduleNames = await queryHandler.getQuestions(req);
  console.log(req.data);
  res.status(200).json({ moduleNames });
};

module.exports = {
  getProgLangs,
  getModuleNames,
  getTopicNames,
  getSubTopicNames,
  getQuestions,
};
