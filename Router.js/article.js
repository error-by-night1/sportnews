import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
module.exports = article = mongoose.model("article", articleSchema);
