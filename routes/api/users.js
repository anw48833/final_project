const express=require("express");
const bcryptjs=require("bcryptjs");
const userRouter=express.Router();
const jwt=require("jsonwebtoken");
const auth=require("../../middleware/auth");
const User= require('../../models/User');

userRouter.post("/sign-up", async(req,res)=>{
    try{
        const {password, email, username} = req.body;
        if(!password || !username){
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        if(password.length<6){
            return res
                .status(400)
                .json({msg: "Password should be atleast 6 charachters"});
        }
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res
                .status(400)
                .json({msg: "User already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password,8);
        const newUser = new User({password: hashedPassword, username, email});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }

});

userRouter.post("/log-in",async(req,res)=>{
    try{
    const{username,password}=req.body;
    if(!password || !username){
        return res.status(400).json({msg: "Please enter all the fields"});
    }

    const user=await User.findOne({username});
    if(!user){
        return res
        .status(400)
        .send({msg: "User with this username does not exist"})
    }

    const isMatch=await bcryptjs.compare(password,user.password);
   
    if(!isMatch){
        return res.status(400).send({msg: "Incorrect Password."});
    }
    const token=jwt.sign({id:user._id},"passwordKey");
    res.json({token,user:{id:user._id, username: user.username}});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

userRouter.post("/tokenIsValid",async(req,res)=>{
    try{
        const token=req.header("x-auth-token");
        if(!token)return res.json(false);
        const verified =jwt.verify(token,"passwordKey");
        if(!verified)return res.json(false);
        const user=await User.findById(verified.id);
        if(!user)return res.json(false);
        return res.json(true);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

userRouter.get("/",auth,async (req, res) => {
        const user=await User.findById(req.user);
        res.json({
            username: user.username,
            id: user._id,
    });
  });

module.exports=userRouter;