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
        case "java": {
          const output = await Compiler.java(input);

          return output;
        }case "python": {
          const output = await Compiler.python(input);
          
          return output;
        }
        default:
          return { code: 402, message: "unexpected language" };
      }
    } catch (err) {
      console.error(err);
      return { code: 402, message: "Unable to compile" };
    }
  }
}

const ProgramHandler = ProgramClass.getInstance();

module.exports = ProgramHandler;
