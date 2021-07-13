const express = require("express")
const mongodb = require("mongodb")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

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
    console.log(err)
    app.listen(process.env.PORT || 8081)
})

app.get("/", function(req, res){

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
    res.send({
        message: `Adding  ${req.body.todo}.`
    })
})
