const { promises: fsPromises } = require("fs");
const questionHandler = require("../data/Questions");
const BaseUrl = require("../util/path");
const path = require("path");

const progLangs = [
  { id: 3, language: ".net" },
  { id: 2, language: "java" },
];

class queryHandlerClass {
  static instance;
  static getInstance() {
    if (!this.instance) this.instance = new queryHandlerClass();
    return this.instance;
  }

  async getProgLangs() {
    return new Promise((resolve) => resolve(progLangs));
  }

  async getModuleNames() {
    try {
      const queryPath = path.join(BaseUrl, "data", "ModuleName.js");
      const rawData = await fsPromises.readFile(queryPath, "utf8");
      const data = rawData.replace(/\\/g, "");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading module names:", error);
      throw new Error("Error reading module names");
    }
  }

  async getTopicNames() {
    try {
      const queryPath = path.join(BaseUrl, "data", "TopicName.js");
      const rawData = await fsPromises.readFile(queryPath, "utf8");
      const data = rawData.replace(/\\/g, "");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading module names:", error);
      throw new Error("Error reading module names");
    }
  }

  async getSubTopicNames() {
    try {
      const queryPath = path.join(BaseUrl, "data", "SubTopicName.js");
      const rawData = await fsPromises.readFile(queryPath, "utf8");
      const data = rawData.replace(/\\/g, "");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading module names:", error);
      throw new Error("Error reading module names");
    }
  }

  async getQuestions(req) {
    try {
      const queryPath = path.join(BaseUrl, "data", "Questions.js");

      const DifficultyLevelID = Number(req.query.DifficultyLevelID);
      const count = Number(req.query.count);

      const data = questionHandler(DifficultyLevelID, count);

      return data;
    } catch (error) {
      console.error("Error reading module names:", error);
      throw new Error("Error reading module names");
    }
  }
}

const queryHandler = queryHandlerClass.getInstance();
module.exports = queryHandler;
