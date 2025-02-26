const express = require('express');
const mdb = require('mongoose');
const bcrypt = require('bcrypt');
//const dotenv = require('dotenv');
const cors = require('cors'); // in order to create a trust between frontend and backend(to convey frontend is a trusted platform)
const signup = require('./models/signupSchema')
const app = express();
const port = 3000;
app.use(cors);
app.use(express.json());
mdb.connect("mongodb://localhost:27017/Database")
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log("Error connecting database");
})
app.post("/signup",async(req,res)=>{
    try{
        console.log(req.body);
        const { firstName,lastName,email,password,phoneNumber}=req.body;
        const hashedPassword = await bcrypt.hash(password,10);
    const newSignup = new signup({//object
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: hashedPassword
    });
    newSignup.save();
    console.log("Loaded to database successfully");
    res.status(201).json({message:"Loaded to database successfully",isSignup:true})
   }
   catch(error){
    console.log("Not successfull");
    res.status(500).json({message:"Unsuccessful signup",isSignup:false});
   }
})
//login 
app.post('/login',async(req,res)=>{
    try{
      const{email,password}=req.body;
      const existingUser = await signup.findOne({email:email});
      if(!existingUser){
        return res.status(404).json({message:"Username not found Signup first",isLogin:false});
      }
      const isValidPassword = await bcrypt.compare(password,existingUser.password);
      if(isValidPassword){
        res.status(200).json({message:"Login sucessfull",isLogin:true});
      }
      else{
        res.status(401).json({message:"Password is incorrect Please check your password",isLogin:false});
      }
    }
    catch(error){
        console.log("Could not Login");
        res.status(400).json({message:"Login Error check your code",isLogin:false});
    }
})
app.get('/getsignupdetails',async(req,res)=>{
    const users = await(signup.find());
    try{
        res.status(201).json({message:users,isFetch:true});
    }
    catch(error){
        res.status(500).json({message:"Not fetched",isFetch:false});
    }

})
app.get("/static",(req,res)=>{
    res.sendFile("C:\\Users\\kamalan\\Documents\\Pavithra\\MERN\\index.html");
})
app.listen(port,()=>console.log("Server started successfully"))