const mongoose = require('mongoose');

const music = new mongoose.Schema({
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    name: { type: String, required: true },
    music: { type: String, required: true },

}, { timestamps: true })

const musicModel = mongoose.model("music", music);

module.exports = musicModel;