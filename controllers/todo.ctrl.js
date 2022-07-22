const ToDo = require('../models/toDo.mongo');

const checkBody = (body) => {
  if(body.text.length || body.body.length) {
      return true
  }
  return false
}

// @desc        Add toDo
// @route       POST /todo/add
// @access      Private/Admin
exports.addToDo = async (req, res, next) => {
    if(!checkBody(req.body)) return res.redirect('/')
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

// @desc        EDIT Todo
// @route       POST /todo/edit/:id
// @access      Private/Admin
exports.editToDo = async (req, res, next) => {
    const id = req.params.id
    if (checkBody(req.body)){
        await ToDo.findByIdAndUpdate(id, req.body)
        res.redirect(204, '/')
    }

};

// @desc        GET Single Todo
// @route       GET /todo/get/:id
// @access      Private/Admin
exports.getSingleToDo = async (req, res, next) => {
    const id = await req.params.id
    const toDos = await ToDo.findById(id);

    res
        .render('todoEdit', { todo: toDos})

};