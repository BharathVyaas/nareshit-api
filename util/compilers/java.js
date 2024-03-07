const fs = require("fs");
const { spawnSync } = require("child_process");

function javaCompiler(input) {
  // Check if Main.java already exists
  const javaFilePath = "Main.java";
  const fileExists = fs.existsSync(javaFilePath);

  // Write the input Java code to Main.java file if it doesn't exist

    fs.writeFileSync(javaFilePath, input);
  

  // Compile the Java code
  const compileResult = spawnSync("javac", [javaFilePath], {
    encoding: "utf-8",
  });

  if (compileResult.error || compileResult.stderr) {
    console.error(
      "Error compiling Java code:",
      compileResult.error || compileResult.stderr
    );
    return "Compilation error";
  }

  // Run the compiled Java program
  const runResult = spawnSync("java", ["Main"], { encoding: "utf-8" });

  if (runResult.error || runResult.stderr) {
    console.error(
      "Error running Java program:",
      runResult.error || runResult.stderr
    );
    return "Runtime error";
  }

  return runResult.stdout.trim();
}

module.exports = javaCompiler;
