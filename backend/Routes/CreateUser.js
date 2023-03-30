// const { json } = require('express')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post("/createuser" , async (req,res)=>{
    try {
        const NewUser = new User({
            email : req.body.email,
            password : req.body.password
        })
        await NewUser.save()
        res.json({success:true})
    } catch (error) {
        console.log("errorr")
        res.json({success:false})
    }
})

module.exports = router;