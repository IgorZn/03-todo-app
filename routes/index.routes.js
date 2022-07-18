const express = require('express');
const { getRoot } = require("../controllers/index.ctrl");
const router = express.Router();

router.route('/')
    .get(getRoot);


module.exports = router;