const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const UserModel = require('./users');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/React');

app.get('/getUsers', (req, res) => {
    UserModel.find({}, '-__v') 
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.post('/createUser', (req, res) => {
    const { username, password } = req.body;

    const newUser = new UserModel({ username, password });

    newUser.save()
        .then(savedUser => {
            res.status(201).json(savedUser); 
        })
        .catch(err => {
            res.status(400).json({ error: err.message }); 
        });
});

app.listen(3001, () => {
    console.log("Running");
});
