const express = require('express');
const mdb = require('mongoose');
const bcrypt = require('bcrypt');
//const dotenv = require('dotenv');
const signup = require('./models/signupSchema')
const app = express();
const port = 3000;
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


app.get("/static",(req,res)=>{
    res.sendFile("C:\\Users\\kamalan\\Documents\\Pavithra\\MERN\\index.html");
})
app.listen(port,()=>console.log("Server started successfully"))