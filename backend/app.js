const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const musicModel = "./models/musicData.js";
const roueter = require('./routes/main');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT = 3003;



app.use("/", roueter)


mongoose.connect("mongodb://0.0.0.0:27017/music", (error => {
    if (!error) app.listen(PORT, () => console.log(`Watching on http://localhost:${PORT}`))
    else console.log(error.message);
}))