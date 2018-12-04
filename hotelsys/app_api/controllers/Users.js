const mongoose = require('mongoose');
const Users = mongoose.model('User');



const addUser = function (req, res) {
    Users.create({
        forename: req.body.forename,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }, (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(user);
        }
    });
};