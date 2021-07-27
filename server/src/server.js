const express = require("express")
const mongodb = require("mongodb")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const Item = require('../models/item.js')

let app = express()

app.use(express.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
let path = require("path")

let db
let connectionString = "mongodb+srv://gmaliii:12341234@mali.jwdjg.mongodb.net/TodoApp?retryWrites=true&w=majority"
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    db = client.db()
    if(err)
        console.log(err)
    else
        console.log("DB connection successfull")
    app.listen(process.env.PORT || 8081)
})

app.get("/home", async function(req, res){
    const items = await db.collection('items').find().toArray()
    console.log(items)
    res.send({
        items: items
    })
})

app.post("/register", function(req, res){
    db.createUser({
        user: req.body.email,
        pwd: req.body.password
    })
    res.send({
        message: `Hello  ${req.body.email} your user was registered!`
    })
})
app.post("/add", function(req, res){
    db.collection('items').insertOne({
        context: req.body.todo
    }, function(){
        res.send({
            message: `${req.body.todo} added.`
        })
    })
})
app.post("/delete", function(req, res){
    console.log(req.body._id)
    db.collection('items').deleteMany({
        _id: req.body._id
    }, function(){
        res.send({
            message: `${req.body._id} deleted.`
        })
    })
})
