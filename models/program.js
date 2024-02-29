const Compiler = require("./compiler");

class ProgramClass {
  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new ProgramClass();
    }
    return this.instance;
  }

  /**
   * data: { type = language, input = code }
   */
  async compile({ type, input }) {
    try {
      switch (type) {
        case "c": {
          const output = await Compiler.c(input, (data) => data);

          return output;
        }
        case "javascript": {
          const output = await Compiler.javaScript(input);

          return output;
        }
        default:
          return { code: 402, meaasge: "unexpected language" };
      }
    } catch (err) {
      console.error(err);
      return { code: 402, massage: "Unable to compile" };
    }
  }
}

const ProgramHandler = ProgramClass.getInstance();

module.exports = ProgramHandler;
