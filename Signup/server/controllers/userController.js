const bcrypt = require('bcryptjs');
const user = require('../models/user');
const signup = async(req , res)=>{
    const{name , email , password} = req.body;
    try{
        const existuser = await user.findOne({email});
        if(existuser){
            return res.status(201).json({message:'user already exist'});
        }
        const hashpass = await bcrypt.hash(password , 10);
        console.log(`hashed password ${hashpass}`);
        const newuser = new user({name , email , password:hashpass});
         await newuser.save();
         res.status(200).json({message:'user created sucessefully'});

    }catch(err){
        res.status(501).json({message:'server error'});
    }
}
const login = async(req , res)=>{
    const {email , password} = req.body;
    try{
        const existuser = await user.findOne({email});
        if(!existuser){
            return res.status(400).json({message:'invalid user'});
        }
        const comparepassword = await bcrypt.compare(password , existuser.password);
        if(!comparepassword){
            return res.status(400).json({message:'invalid password'});
        }
        return res.status(200).json({
            message:"Login ho gya",
            user :{
                id : existuser._id,
                email : existuser.email,
                name : existuser.name
            }
        })
    }catch(err){
        console.log("Login error" , err);
        res.status(500).json({message:"server error"});
    };
}
module.exports = ({signup , login});