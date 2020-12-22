import mongoose from "mongoose";
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
module.exports = news = mongoose.model("news", newsSchema);
