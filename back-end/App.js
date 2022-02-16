const mongoose = require("mongoose");
const express = require("express");
const { MONGO_KEY } = require("./keys");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());

mongoose.connect(MONGO_KEY);

mongoose.connection.on("connected", () => {
    console.log("connected to mongoDB successfully");
});
mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
});

app.listen(3000, () => {
    console.log("server connecting.....");
})
