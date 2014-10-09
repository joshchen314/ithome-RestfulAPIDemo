'use strict';

var express = require('express');
var router = express.Router();

// Get todo list
router.get('/:user_id/todos', function(req, res) {
    res.status(200).json( {success: "GET lists"} );
});

// Create a todo task
router.post('/:user_id/todos', function(req, res) {
    var data = req.body;

    res.status(200).json( {success: data } );
});

// Get a todo task
router.get('/:user_id/todos/:todo_id', function(req, res) {
    res.status(200).json( {success: "GET 1 task", user: req.params.user_id, todo_id: req.params.todo_id} );
});

// Update a todo task
router.put('/:user_id/todos/:todo_id', function(req, res) {
    res.status(200).json( {success: "PUT"} );
});

// Delete a todo task
router.delete('/:user_id/todos/:todo_id', function(req, res) {
    res.status(200).json( {success: "DELETE"} );
});

module.exports = router;