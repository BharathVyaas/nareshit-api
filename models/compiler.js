const javaScriptCompiler = require("../util/compilers/javascript");
const cCompiler = require("../util/compilers/c");

class CompilerClass {
  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new CompilerClass();
    }

    return this.instance;
  }

  async c(input) {
    const output = await cCompiler(input);

    return output;
  }

  async javaScript(input) {
    const output = await javaScriptCompiler(input);

    return String(output);
  }
}

const Compiler = CompilerClass.getInstance();

module.exports = Compiler;
