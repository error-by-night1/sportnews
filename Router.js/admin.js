import mongoose from "mongoose";
const { Schema } = mongoose;

const adminSchema = new Schema({
  username: String,
  password: String,
  hidden: Boolean,
});
module.exports =admin= mongoose.model("admin", adminSchema);