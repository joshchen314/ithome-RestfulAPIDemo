'use strict';

var express = require('express');
var TODO = require('../models/todos');
var router = express.Router();

// Get todo list
router.get('/:user_id/todos', function(req, res) {
    var user_id = req.params.user_id;

    TODO.find(
        {user_id: user_id},
        function (err, results) {
            if (err) {
                res.status(400).json(
                    { error: "can not find data" }
                );
            } else {
                res.status(200).json(
                    results
                );
            }
        }
    );
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
    var user_id = req.params.user_id;
    var todo_id = req.params.todo_id;

    TODO.find(
        { _id: todo_id, user_id: user_id},
        function (err, results) {
            if (err) {
                res.status(400).json(
                    { error: "can not find data" }
                );
            } else {
                res.status(200).json(
                    results[0]
                );
            }
        }
    );
});

// Update a todo task
router.put('/:user_id/todos/:todo_id', function(req, res) {
    var user_id = req.params.user_id;
    var todo_id = req.params.todo_id;
    var data = req.body;

    TODO.update(
        { _id: todo_id, user_id: user_id },
        { $set: { content: data.content } },
        function (err, num, raw, results) {
            if (err) {
                res.status(400).json(
                    { error: "update data error" }
                );
            } else {
                TODO.find({ _id: todo_id, user_id: user_id }, function (err, results) {
                    res.status(201).json(
                        results[0]
                    );
                });
            }
        }
    );
});

// Delete a todo task
router.delete('/:user_id/todos/:todo_id', function(req, res) {
    res.status(200).json( {success: "DELETE"} );
});

module.exports = router;