const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require('../models/user')

router.post("/loginuser",
    body('email').isEmail(),
    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            User.findOne({ email: req.body.email }).then((docs) => {
                if (!docs) {
                    return res.status(400).json({ errors: "Incorrect Email" });
                }
                if (docs.password !== req.body.password) {
                    return res.status(400).json({ errors: "Incorrect Password" });
                }
                res.json({ success: true })
            })


        } catch (error) {
            console.log("errorr")
            res.json({ success: false })
        }
    })

module.exports = router;