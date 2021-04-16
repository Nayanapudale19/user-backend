const express=require('express');
const router=express.Router();

const user=require('./userSchema');

router.get('/users',(req,res,next)=>{
    user.find((err,users) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(users);
        }
    });
});

router.post('/user',(req,res,next)=>{
    let newUser = new user({
        name:req.body.name,
        water_intake:req.body.water_intake,
        calories:req.body.calories
    });
    newUser.save((err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"users added suucessfully"});
        }
    });
});
module.exports=router;