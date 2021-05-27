const express = require ("express");
const router = express.Router();
const bodyParser = require("body-parser");
 router.use(bodyParser.urlencoded({ extended: false }));
const User = require ("../models/User");

//create a new person and save
router.post('/user',async (req,res)=>{

    const user= new User(req.body);
    const userSaved= await user.save();
    try{

       res.status(200).json(userSaved);
    }
    catch{
        res.status(400).json('failed');
    }
});

//get all users
router.get("/all", (req, res) =>
    User.find()
        .then((el) => res.json(el))
        .catch((err) => console.log(err))
);

//edit user by ID
router.put( '/updatee_user/:id', (req,res)=> {
    User.findByIdAndUpdate( {_id:req.params.id},{...req.body},(err,data)=> {
        err ? console.log(err) : res.json({msg:"user was updated"})
    })
});
//delete user by id
router.delete('/delete_user/:id', (req,res)=> {
    User.findByIdAndDelete({_id:req.params.id},(err,msg)=> {      
        err ? console.log(err) : res.json({msg:"user was deleted"})
    })
})
module.exports = router;