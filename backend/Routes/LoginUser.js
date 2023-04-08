const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/user')

router.post("/loginuser",
    body('email').isEmail(),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            User.findOne({ email: req.body.email }).then(async (docs) => {
                if (!docs) {
                    return res.status(400).json({ errors: "Incorrect Email" });
                }

                const pwdCompare = await bcrypt.compare(req.body.password , docs.password);
                console.log(pwdCompare)
                if (!pwdCompare) {
                    return res.status(400).json({ errors: "Incorrect Password" });
                }
                return res.json({ success: true })
            })


        } catch (error) {
            console.log("errorr")
            res.json({ success: false })
        }
    })

module.exports = router;