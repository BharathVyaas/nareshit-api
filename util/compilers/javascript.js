const { VM } = require("vm2");

function javaScriptCompiler(input) {
  const vm = new VM();
  const result = vm.run(input);

  return result;
}

module.exports = javaScriptCompiler;
