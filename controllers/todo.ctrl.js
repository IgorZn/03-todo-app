const ToDo = require('../models/toDo.mongo');

// @desc        Add toDo
// @route       POST /todo/add
// @access      Private/Admin
exports.addToDo = async (req, res, next) => {
    await ToDo.create(req.body, async (err) => {
        if (err) return console.log(err)
        res.redirect('/')
    })

};