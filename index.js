require("dotenv").config();
const express = require("express");
const cors = require("cors");

const assessmentRoutes = require("./routes/assessemnt");
const queryRoutes = require("./routes/query");
const programRoutes = require("./routes/program");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/assessment", assessmentRoutes);

app.use("/query", queryRoutes);

app.use("/program", programRoutes);

app.listen(PORT, () => {
  console.log("Server is listining on port:", PORT);
});
