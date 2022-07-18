const ToDo = require('../models/toDo.mongo')

// @desc        Root
// @route       GET /
// @access      Public
exports.getRoot = async (req, res, next) => {
    const toDos = await ToDo.find({});

    res
        .render('index', { todos: toDos})
        .redirect(200, '/');
};