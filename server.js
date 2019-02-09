const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//bp middleware
app.use(bodyParser.json());

mongoose
    .connect("mongodb://localhost/test3", {
    keepAlive: true,
    useNewUrlParser: true
}).then(() => console.log("connected to db"));


app.use("/api/items", items);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))