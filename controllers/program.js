const ProgramHandler = require("../models/program");

const compile = async (req, res) => {
  try {
    console.log(req.query);

    const output = await ProgramHandler.compile({
      type: req.query.type,
      input: req.query.input,
    });

    res.send(output);
  } catch (err) {
    console.error(err);

    res.send({ code: 402, message: "error trying to compile code" });
  }
};

module.exports = { compile };
