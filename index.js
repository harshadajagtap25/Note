const express = require("express");
const { noteController } = require("./routes/note.route");
const { userController } = require("./routes/user.route");
const { connection } = require("./config/db");
const { authentication } = require("./middlewares/authentication");
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the notebook");
});

app.use(cors())
app.use("/user", userController);
app.use(authentication)
app.use("/note", noteController);

app.listen(PORT, async (req, res) => {
  try {
    await connection;
    console.log(`Connected to ${PORT}`);
  } catch (err) {
    console.log("Something went wrong to connect to ${PORT}");
  }
});
