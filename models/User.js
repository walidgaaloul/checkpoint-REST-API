const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Firstname: { type: String, required: true },
    Lastname:{type:String},
    age: {type: Number},
    Email:{type:String},
});
module.exports = mongoose.model("User", userSchema);