const express = require('express');

const app = express();
app.get("/static",(req,res)=>{
    res.sendFile("C:\\Users\\kamalan\\Documents\\Pavithra\\MERN\\index.html");
})
const port = 3001
app.listen(port,()=>console.log("Server started successfully"))