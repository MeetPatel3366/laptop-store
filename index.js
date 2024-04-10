const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Laptop = require('./db/laptopModel').Laptop

const port = 8000 ;

let dbUrl = "mongodb+srv://meet:patel@laptop-record.idh9pra.mongodb.net/?retryWrites=true&w=majority&appName=Laptop-record"

mongoose.connect(dbUrl)
 .then(()=>console.log("Mongodb connection successful!"))
 .catch(error=>console.log(`unable to connect due to ${error}`))

 app.use(express.json()) //middleware

 app.get('/',function(req,res){
    res.send("welcome to laptop store api!")
 })

 app.get('/api/laptop',(req,res)=>{
    Laptop.find()
     .then((laptop)=>{
        res.json(laptop)
     })
     .catch((err)=>{
        res.json(err)
     })
 })

 app.get('/api/laptop/:id',(req,res)=>{
    const id = req.params.id 
    Laptop.findById(id)
      .then((laptop)=>{
        res.json(laptop)
      })
      .catch((err)=>{
        res.json(err)
      })
 })
 
 app.post('/api/laptop',(req,res)=>{
    const body = req.body
    const newLaptop = new Laptop(body)
    newLaptop.save()
    .then((newLaptop)=>{
        res.json(newLaptop)
    })
    .catch((err)=>{
        res.json(err)
    })
 })

 app.put('/api/laptop/:id',(req,res)=>{
    const id = req.params.id 
    const body = req.body
    Laptop.findByIdAndUpdate(id,body)
        .then((book)=>{
            res.json('successfully updated!')
        })
        .catch((err)=>{
            res.json(err)
        })
 })

 app.delete('/api/laptop/:id',(req,res)=>{
    const id = req.params.id 
    Laptop.findByIdAndDelete(id)
        .then((laptop)=>{
            res.json('successfully deleted!')
        })
        .catch((err)=>{
            res.json(err)
        })
 })
 app.delete('/api/laptop',(req,res)=>{
     Laptop.deleteMany()
        .then((laptop)=>{
            res.json('successfully deleted everything!')
        })
        .catch((err)=>{
            res.json(err)
        })
 })
 app.listen(port,function(){
    console.log(`server started on port ${port}`)
 })