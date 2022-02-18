const mongoose = require("mongoose");
const express = require("express");
const { MONGO_KEY } = require("./server/keys");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const keyRoutes = require("./server/server");
const resultsRoutes = require("./server/keys");
const port = "3000";

app.use(bodyparser.json());

mongoose.connect(
    "mongodb+srv://VivekKumar:vivek@my-search-engine.s9bot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
);
mongoose.connection.on("connected", () => {
    console.log("server connected to mongoDB at",port,"port");
});
mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
});
app.use("/", keyRoutes);
app.use("/", resultsRoutes);

app.listen(port, () => {
    console.log("server connecting.....");
})
