const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const roueter = require('./routes/main');
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = 3003;

app.use("/", roueter)


mongoose.connect("mongodb://0.0.0.0:27017/music", (error => {
    if (!error) app.listen(PORT, () => console.log(`Watching on http://localhost:${PORT}`))
    else console.log(error.message);
}))