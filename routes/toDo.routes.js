const express = require('express');
const { addToDo } = require("../controllers/todo.ctrl");
const router = express.Router();

router
    .post('/add', addToDo);


module.exports = router;