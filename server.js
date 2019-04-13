var bodyParser = require('body-parser')
var express = require('express')
var app = express()

//const request = require('request')
const mongoose = require('mongoose')
const Expense = require("./server/models/Expense")
const dataObjects = require("./expenses-data")

mongoose.connect("mongodb://localhost/ExpensesDB", { useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

for (let object of dataObjects){
    let expDoc = new Expense(object)
    expDoc.save()
}

app.listen(3000, function() {
    console.log("Server up and running on port 3000")
  })