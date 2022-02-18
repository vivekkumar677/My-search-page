const mongoose = require("mongoose");
const resSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true
    },
    displayLink:{
        type: String, 
        required:true
    },

    link:{
        type:String, 
        required:true
    },
    snippet:{
        type:String, 
        required:true
    }
});

const results = mongoose.model("results", resSchema);
module.exports = results;