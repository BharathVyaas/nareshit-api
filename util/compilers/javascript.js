const { VM } = require("vm2");

function javaScriptCompiler(input) {
  let output = ""; // Variable to store the output of console.log calls

  const vm = new VM({
    sandbox: {
      console: {
        log: (...args) => {
          output +=
            args
              .map((arg) =>
                typeof arg === "object" ? JSON.stringify(arg) : arg
              )
              .join(" ") + "\n";
          // For each argument, stringify objects and concatenate them with other arguments
        },
      },
    },
  });

  vm.run(input);

  let returnValue = output.trim();

  returnValue = JSON.stringify(returnValue);

  return returnValue;
}

module.exports = javaScriptCompiler;
