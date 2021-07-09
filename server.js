let express = require("express")
let mongodb = require("mongodb")

let app = express()

app.use(express.urlencoded({extended: false}))
let path = require("path")

let db
let connectionString = "mongodb+srv://gmaliii:12341234@mali.jwdjg.mongodb.net/TodoApp?retryWrites=true&w=majority"
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    db = client.db()
    app.listen(3000)
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/template.html"));
})

app.post("/create", function(req, res){
    db.collection("items").insertOne({text: req.body.item}, function(){
        res.send("Thanks for submitting")
    })
})
