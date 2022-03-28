const express = require('express');
const musicModel = require('../models/musicData');
const router = express.Router();
const { musicList } = require('../controller/musicList');
const { insertMusic } = require('../controller/inserMusic');

router.get("/", musicList)
router.post("/insert", insertMusic)


module.exports = router