const ToDo = require('../models/toDo.mongo')

// @desc        Root
// @route       GET /
// @access      Public
exports.getRoot = async (res, req, next) => {
    const toDos = await ToDo.find({});

    req
        .render('index', { todos: toDos})
};