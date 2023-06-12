const express = require('express');
const router = express.Router();

router.post("/projectdata" , (req,res)=>{
    try {
        // console.log(global.project_data)
        res.send(global.project_data)
        
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})






module.exports = router;