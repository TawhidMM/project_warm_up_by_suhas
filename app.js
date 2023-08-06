// require express

const express = require('express') ;

const patientRouter = require('./routers/patientRouters');

const app = express() ;

const port = 3000 ;

app.listen(port,()=>{
    
    console.log("server is listening at port ",port);
}) ;

// app.get('/login',(req,res)=>{

//     console.log(req.url);  

//     console.log("req received");

//     res.status(200).sendFile('views/login.html',{root:__dirname}) ;  
// }) ;

// app.get('/home',(req,res)=>{

//     res.send("hello to home");
// }) ;

// app.post('/home/employee',(req,res)=>{

// })

// app.use((req,res)=>{

//     res.status(404).send("page not found") ;
// }) 


app.use('/patient',patientRouter);



