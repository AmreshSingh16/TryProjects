// const { json } = require('express')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt  = require('bcryptjs');
const User = require('../models/user')

router.post("/createuser" , 
body('email').isEmail(),
body('password').isLength({ min: 5 }),
async (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  let secPassword =  await bcrypt.hash(req.body.password , salt) 

    try {
        User.create({
            name:req.body.name,
            email : req.body.email,
            password : secPassword
        }).then(user =>{
            res.json({success:true})
        })
    } catch (error) {
        console.log("errorr")
        res.json({success:false})
    }
})

module.exports = router;