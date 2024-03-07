const { PythonShell } = require('python-shell');

async function pythonCompiler(input) {
    try {
        const result = await PythonShell.runString(input);
        return result.join('\n').trim();
    } catch (error) {
        throw error;
    }
}

module.exports = pythonCompiler;
