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



        
route.get('/16.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("16.ejs" , {price:data});

    })   
        })
route.get('/17.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("17.ejs" , {price:data});

    })   
        })
route.get('/18.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("18.ejs" , {price:data});

    })   
        })
route.get('/19.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("19.ejs" , {price:data});

    })   
        })
route.get('/20.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("20.ejs" , {price:data});

    })   
        })
route.get('/21.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("21.ejs" , {price:data});

    })   
        })
route.get('/22.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("22.ejs" , {price:data});

    })   
        })
route.get('/23.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("23.ejs" , {price:data});

    })   
        })
route.get('/24.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("24.ejs" , {price:data});

    })   
        })
route.get('/25.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("25.ejs" , {price:data});

    })   
        })
route.get('/26.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("26.ejs" , {price:data});

    })   
        })
route.get('/27.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("27.ejs" , {price:data});

    })   
        })
route.get('/28.ejs', (req,res , next)=>{

    sea.exec(function (err , data ) {
        if (err) throw err;

        res.render("28.ejs" , {price:data});

    })   
        })




        route.get('/register', (req,res , next)=>{

            sea.exec(function (err , data ) {
                if (err) throw err;
        
                res.render("register" , {price:data});
        
            })   
                })





        route.post("/register" , async (req,res)=>{

            try {


               const dailydata = new wheat({

                date: req.body.date,
                rice: req.body.rice,
                serial: req.body.serial,

                wheatprice: req.body.wheatprice,
                chanaprice: req.body.chanaprice,
                raharprice: req.body.raharprice,
                moongprice: req.body.moongprice,
                dhanprice: req.body.dhanprice,
                krantidhanprice: req.body.krantidhanprice,
                numdhanprice: req.body.numdhanprice,
                soyabeanprice: req.body.soyabeanprice,
                masoorprice: req.body.masoorprice,
                udhadprice: req.body.udhadprice,
                makkaprice: req.body.makkaprice,
                batriprice: req.body.batriprice


               

               }) 


              const registered =  await dailydata.save();
              res.status(201).render("index");

                
            }




            
            catch (error) {
                

                res.status(400).send(error);
            }



        })
        













        route.get('/registerkareli', (req,res , next)=>{

            sea.exec(function (err , data ) {
                if (err) throw err;
        
                res.render("registerkareli" , {price:data});
        
            })   
                })





        route.post("/registerkareli" , async (req,res)=>{

            try {


               const dailydatakareli = new wheat({

                // date: req.body.date,
                // rice: req.body.rice,
                // serial: req.body.serial,

                kareliwheatprice: req.body.kareliwheatprice,
                karelichanaprice: req.body.karelichanaprice,
                kareliraharprice: req.body.kareliraharprice,
                karelimoongprice: req.body.karelimoongprice,
                karelidhanprice: req.body.karelidhanprice,
                karelikrantidhanprice: req.body.karelikrantidhanprice,
                karelinumdhanprice: req.body.karelinumdhanprice,
                karelisoyabeanprice: req.body.karelisoyabeanprice,
                karelimasoorprice: req.body.karelimasoorprice,
                kareliudhadprice: req.body.kareliudhadprice,
                karelimakkaprice: req.body.karelimakkaprice,
                karelibatriprice: req.body.karelibatriprice


               

               }) 


              const registeredkareli =  await dailydatakareli.save();
              res.status(201).render("index");

                
            }




            
            catch (error) {
                

                res.status(400).send(error);
            }



        })
        





















module.exports = route;