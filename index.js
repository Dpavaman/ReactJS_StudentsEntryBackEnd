const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://Pavaman:Pavaman20@studentmentorassignment.z8quo.mongodb.net/crudOperations?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.send("<h1> welcome! </h1>");
})

app.use("/api", require("./routes/index"));

app.listen(port);