const express = require('express');
const route = express.Router();

var wheat = require('../module/module1');

var sea = wheat.find({});







route.get('/',(req,res,next)=>{

   
    res.render('index.ejs');

})


route.get('/index.ejs', (req,res,next)=>{

    res.render("index.ejs");

});

route.get('/1.ejs', (req,res , next)=>{

    
    res.render("1.ejs");

        })


route.get('/2.ejs', (req,res , next)=>{

    
    res.render("2.ejs");
        })


route.get('/3.ejs', (req,res , next)=>{

       
    res.render("3.ejs");

        })


route.get('/4.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("4.ejs" , {price:data});

    })   
        })


    
route.get('/5.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("5.ejs" , {price:data});

    })   
        })

        
       
/
        
route.get('/6.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("6.ejs" , {price:data});

    })   
        })
route.get('/7.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("7.ejs" , {price:data});

    })   
        })


        
route.get('/8.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("8.ejs" , {price:data});

    })   
        })


route.get('/9.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("9.ejs" , {price:data});

    })   
        })
route.get('/10.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("10.ejs" , {price:data});

    })   
        })
route.get('/11.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("11.ejs" , {price:data});

    })   
        })
route.get('/12.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("12.ejs" , {price:data});

    })   
        })
route.get('/13.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("13.ejs" , {price:data});

    })   
        })
route.get('/14.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("14.ejs" , {price:data});

    })   
        })

route.get('/15.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("15.ejs" , {price:data});

    })   
        })
        




module.exports = route;