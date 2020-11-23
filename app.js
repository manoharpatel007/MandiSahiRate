var express = require('express')
var app = express();
app.use('/public',express.static('public'))
const port = process.env.PORT || 3000;
const ejs = require('ejs');


const mainRoute = require('./route/route1');






app.set('view engine', 'ejs');

app.use(express.static('public'))





app.use(mainRoute);




app.listen(port, () => {

    console.log("Server has started ... ")

    
})





