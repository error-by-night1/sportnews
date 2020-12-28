const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Schema } = mongoose;
var bcrypt = require("bcryptjs");
//--------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});
//---------------------------------------------------
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//-----------------------------------------------------
//DB
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dhaouiaziz13:Dhaoui2708@cluster0.cxxvc.mongodb.net/news?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("connected to db");
  } catch (error) {
    console.log("bummer an error happned while trying to connect to db");
  }
};
connectdb();
//_______________________________________________________________________________________________________
const articleSchema = new Schema({
  isarticle: Boolean,
  title: { type: String, required: true },
  author: String,
  body: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  imgurl: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
//************************************************
const newsSchema = new Schema({
  isnews: Boolean,
  title: { type: String, required: true },
  author: String,
  body: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  imgurl: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
//********************************************
const usersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isadmin: Boolean,
});
/////////////////////////////////////////////////////////////////
const article = mongoose.model("articles", articleSchema, "articles");
// article.create({
//   imgurl:
//     "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&62C6A28D-D2CA-4635-AA7017C94E6DDB72",
//   isarticle: true,
//   title: "article ki za7 ",
//   author: "aziz",
//   body: "sa7a zied XD",
// });

const news = mongoose.model("news", newsSchema);
// news.create({
//   imgurl:
//     "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&62C6A28D-D2CA-4635-AA7017C94E6DDB72",
//   isnews: true,
//   title: "hay tarf news ",
//   author: "aziz",
//   body: "bla bla bla",
// });
const user = mongoose.model("users", usersSchema, "users");
// user.create({
//   username: "Aziz",
//   password: "admin",
//   isadmin: true,
// });
/////////////////////////////////////////////////////////////////

//ROUTES
//-----------------------------------------------------
app.post("/add", (req, res) => {
  if (req.body.type === "article") {
    article.create({
      imgurl: req.body.imgurl,
      isarticle: true,
      title: req.body.title,
      author: req.body.username,
      body: req.body.body,
    });
  } else {
    news.create({
      imgurl: req.body.imgurl,
      isnews: true,
      title: req.body.title,
      author: req.body.username,
      body: req.body.body,
    });
  }
});
//-----------------------------------------------------
app.post("/delete", async (req, res) => {
  if (req.body.is === false) {
    await news.find({ title: req.body.title }, async (err, data) => {
      await news.deleteOne({ title: req.body.title }, function (err) {
        if (err) return "cant delete";
      });
    });
  } else {
    await article.find({ title: req.body.title }, async (err, data) => {
      await article.deleteOne({ title: req.body.title }, function (err) {
        if (err) return "cant delete";
      });
    });
  }
});
//-----------------------------------------------------
app.get("/admindata", async (req, res) => {
  let arts = await article.find({});
  let neww = await news.find({});
  res.json({ articles: arts, news: neww });
});
//-----------------------------------------------------
app.get("/home", async (req, res) => {
  let data = await news.find({});
  if (data) {
    res.json(data);
  }
});
//------------------------------------------------------
app.get("/articles", async (req, res) => {
  let articles = await article.find({});
  if (articles) {
    res.json(articles);
  }
});
//------------------------------------------------------
let token;
//----------------------------------------------------
app.post("/signup", (req, res) => {
  try {
    user.create({
      username: req.body.email,
      password: req.body.pass,
      isadmin: false,
    });
  } catch (error) {
    console.log("somethin req not provided ");
  }
});
//-----------------------------------------------------
app.post("/login", async (req, res) => {
  /************************************/
  var rand = function () {
    return Math.random().toString(36).substr(2);
  };

  var tokens = function () {
    return rand() + rand(); // to make it longer
  };
  token = tokens();
  /*****************************************/
  let username = req.body.email;
  let password = req.body.pass;

  await user.findOne({ username }, function async(err, docs) {
    if (docs) {
      bcrypt.compare(password, docs.password, async function (err, resp) {
        if (resp === true) {
          res.json({
            name: docs.username,
            token: token,
            isadmin: docs.isadmin,
          });
        }
      });
    }
  });
});
//------------------------------------------------------
app.listen(port, () => console.log(`Example app listening on port ${port}`));
