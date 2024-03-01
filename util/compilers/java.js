const { spawnSync } = require("child_process");

function javaCompiler(input) {
  // Compile the Java code
  const compileResult = spawnSync("javac", ["Main.java"], {
    input,
    encoding: "utf-8",
  });

  if (compileResult.error) {
    console.error("Error compiling Java code:", compileResult.error);
    return "Compilation error";
  }

  if (compileResult.stderr) {
    console.error("Java compilation stderr:", compileResult.stderr);
    return "Compilation error";
  }

  // Run the compiled Java program
  const runResult = spawnSync("java", ["Main"], { encoding: "utf-8" });

  if (runResult.error) {
    console.error("Error running Java program:", runResult.error);
    return "Runtime error";
  }

  if (runResult.stderr) {
    console.error("Java program stderr:", runResult.stderr);
    return "Runtime error";
  }

  return runResult.stdout.trim();
}

module.exports = javaCompiler;
