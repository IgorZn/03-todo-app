const express = require('express');
const { addToDo, deleteToDo, getSingleToDo} = require("../controllers/todo.ctrl");
const router = express.Router();

router
    .get('/get/:id', getSingleToDo)
    .delete('/delete/:id', deleteToDo)
    .post('/edit/:id', addToDo)
    .post('/add', addToDo);


module.exports = router;