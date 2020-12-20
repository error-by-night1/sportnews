const express = require("express");
const app = express();
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
//------------------------------------------------------
app.listen(port, () => console.log(`Example app listening on port ${port}`));
