const express = require("express");
const app = express();
const connectDB = require("./database/db");
//---------------------------------------------------
connectDB();
//---------------------------------------------------

const port = process.env.PORT || 8080;
let cors = require("cors");
//---------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//-----------------------------------------------------

app.get("/", (req, res) => {
  res.send("<h>start working team</h1>");
});
//---------------------------------------------------
// Define routes
app.use("/Router/article", require("./Router/article"));
app.use("/Router/news", require("./Router/news"));

//------------------------------------------------------
app.listen(port, () => console.log(`Example app listening on port ${port}`));
