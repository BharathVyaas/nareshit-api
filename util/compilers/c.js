const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const fs = require("fs");

async function cCompiler(input) {
  // Write the input C code to a temporary file
  const tmpFile = "temp.c";
  fs.writeFileSync(tmpFile, input);

  try {
    // Compile the C code using GCC
    const { stdout: compileOutput, stderr: compileError } = await exec(
      `gcc ${tmpFile} -o ${tmpFile.replace(".c", "")}`
    );
    if (compileError) {
      console.error(`Compilation error: ${compileError}`);
      return { error: "Compilation error" };
    }
    console.log(`Compilation success: ${compileOutput}`);

    // Execute the compiled program
    const { stdout: executionOutput, stderr: executionError } = await exec(
      `./${tmpFile.replace(".c", "")}`
    );
    if (executionError) {
      console.error(`Execution error: ${executionError}`);
      return { error: "Execution error" };
    }
    console.log(`Execution success: ${executionOutput}`);
    return executionOutput; // Send the output of the program
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return { error: "Internal error" };
  }
}

module.exports = cCompiler;
