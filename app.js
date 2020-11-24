var express = require('express')
var app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');


const mainRoute = require('./route/route1');

if (process.env.NODE_ENV === 'production') {
    
    app.use('/public',express.static('public'));
    
}

app.use('/public',express.static('public'));



app.set('view engine', 'ejs');







app.use(mainRoute);




app.listen(port, () => {

    console.log("Server has started ... ")

    
})





