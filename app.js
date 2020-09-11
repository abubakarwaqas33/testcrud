
const express = require('express')
var app = express()

app.set('view engine','ejs')

var toDoList= require('./controllers/toDoList')


toDoList(app)

app.listen(3000);




// app.get('/', function (req, res) {

//     let bio={name:'bytehoax', owner:'abubakar waqas', url:'bytehoax.com'}
//     res.render('index',{username:'welcome abubakar',bio:bio})
// })

// app.get('/about-us', function (req, res) {
//     res.send('welcome to about us page')
// })

// app.get('/contact', function (req, res) {
//     res.render('contact')

// });

// app.post('/contact', urlencodedParser,function (req, res) {

//     console.log(req.body)
//     res.send(req.body)
// })