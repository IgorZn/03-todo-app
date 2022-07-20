const ToDo = require('../models/toDo.mongo');

// @desc        Add toDo
// @route       POST /todo/add
// @access      Private/Admin
exports.addToDo = async (req, res, next) => {
    const { text, body } = req.body
    if(text.length === 0 || body.length === 0) return res.redirect('/')
    await ToDo.create(req.body, async (err) => {
        if (err) return console.log(err)
        res.redirect('/')
    })

};

// @desc        DELETE Todo
// @route       POST /todo/delete/:id
// @access      Private/Admin
exports.deleteToDo = async (req, res, next) => {
    const id = req.params.id
    await ToDo.findByIdAndDelete(id)

    res.redirect(204, '/')

};