const mongoose = require("mongoose");
const keySchema = mongoose.Schema({
    path:{
        type:String, 
        required:true
    }
});
const key = mongoose.model("keys", keySchema);
module.exports = key;