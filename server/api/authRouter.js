let express = require('express'),
    router  = express.Router(),
    passport = require('passport'),
    User = require('../models/User'),
    jwt = require('jsonwebtoken'),
    config = require('../config');

router.post('/signup', (req, res) => {
    if (!(req.body.email && req.body.password && req.body.name))
        return res.json({success: false});
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then((user) => {
        res.json({success: true});
    }).catch(() => {
        res.json({success: false});
    })
});

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email}).then((user) => {
        if (!user)
            return res.sendStatus(403);
        user.checkPassword(req.body.password).then(() => {
            let token = jwt.sign({_id: user._id}, config.secret, {
                expiresIn: "8h"
            });
            console.log("token", token);
            res.json({success: true, token: token});
        }).catch((err) => {
            res.sendStatus(403);
        })
    })
});


exports.router = router;