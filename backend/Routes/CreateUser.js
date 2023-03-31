// const { json } = require('express')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User = require('../models/user')

router.post("/createuser" , 
body('email').isEmail(),
body('password').isLength({ min: 5 }),
(req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try {
        User.create({
            name:req.body.name,
            email : req.body.email,
            password : req.body.password
        }).then(user =>{
            res.json({success:true})
        })
    } catch (error) {
        console.log("errorr")
        res.json({success:false})
    }
})

module.exports = router;