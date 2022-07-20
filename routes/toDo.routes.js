const express = require('express');
const { addToDo, deleteToDo} = require("../controllers/todo.ctrl");
const router = express.Router();

router
    .delete('/delete/:id', deleteToDo)
    .post('/add', addToDo);


module.exports = router;