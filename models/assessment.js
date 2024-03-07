const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    testName: "Test",
    isActive: 1,
    startDate: "2011-04-25",
    endDate: "2011-04-28",
    startTime: "9:00",
    endTime: "12:00",
  });
}

class AssessmentHandlerClass {
  static instance;
  static getInstance() {
    if (!this.instance) this.instance = new AssessmentHandlerClass();
    return this.instance;
  }

  async getAllAssessments() {
    return new Promise((reslove) => reslove(data));
  }
}

const AssessmentHandler = AssessmentHandlerClass.getInstance();
module.exports = AssessmentHandler;
