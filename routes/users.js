'use strict';

var express = require('express');
var TODO = require('../models/todos');
var router = express.Router();

// Get todo list
router.get('/:user_id/todos', function(req, res) {
    res.status(200).json( {success: "GET lists"} );
});

// Create a todo task
router.post('/:user_id/todos', function(req, res) {
    var user_id = req.params.user_id;
    var data = req.body;

    // insert to db
    var todo = new TODO();
    todo.user_id = user_id;
    todo.content = data.content;
    todo.created_at = Date.now();
    todo.updated_at = Date.now();

    todo.save(function (err) {
        if (err) {
            res.status(400).json(
                { error: "insert db error" }
            );
        } else {
            res.status(201).json(
                todo
            );
        }
    });
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