const musicModel = require("../models/musicData");


const musicList = async (req, res, next) => {
    const musics = await musicModel.find({}, { _id: false, __v: false});
    res.json(musics);
}


module.exports = { musicList }