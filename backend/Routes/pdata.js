const express = require('express');
const router = express.Router();

const db = require('../db')
const projectdb = db.projectDB


router.post("/pdata" , async (req,res)=>{
    try {
        const a = projectdb(req.body.id);
        await a.then(function(result){
            res.send(result)
        })
        
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router;