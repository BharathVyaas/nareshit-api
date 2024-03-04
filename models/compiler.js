const javaScriptCompiler = require("../util/compilers/javascript");
const cCompiler = require("../util/compilers/c");
const javaCompiler = require("../util/compilers/java");

function getOutput(rawOutput) {
  let output = rawOutput;

  if (typeof rawOutput === "number") {
    // ...
  }

  if (typeof rawOutput === "object") {
    output = JSON.stringify(rawOutput);
  }

  return output;
}

class CompilerClass {
  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new CompilerClass();
    }

    return this.instance;
  }

  async c(input) {
    const rawOutput = await cCompiler(input);

    let output = getOutput(rawOutput);

    return output;
  }

  async javaScript(input) {
    const rawOutput = await javaScriptCompiler(input);

    let output = getOutput(rawOutput);

    return output;
  }

  async java(input) {
    const rawOutput = await javaCompiler(input);

    let output = getOutput(rawOutput);

    return output;
  }
}

const Compiler = CompilerClass.getInstance();

module.exports = Compiler;
