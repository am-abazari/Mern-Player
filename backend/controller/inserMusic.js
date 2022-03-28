const musicModel = require('../models/musicData');

const insertMusic = async (req, res, next) => {
    if (req.method.toLowerCase() == "post" && Object.keys(req.body).length == 4) {
        const { cover, name, artist, music } = req.body;
        if (cover.length && name.length && artist.length && music.length) {
            const musicItem = await musicModel.create({
                "cover": cover,
                "artist": name,
                "name": artist,
                "music": music

            });
            if (musicItem.save()) res.status(201).json({ status: 201, msg: "Music Record Created !" })
        } else {
            res.status(401).json({ status: 401, msg: "Please enter all the values" })
        }
    } else res.status(404).json({ status: 404, msg: "Please send some Data" })
}


module.exports = { insertMusic }