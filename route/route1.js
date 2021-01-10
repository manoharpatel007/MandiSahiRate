const express = require('express');
const route = express.Router();

var wheat = require('../module/module1');

var sea = wheat.find({});







route.get('/', (req, res, next) => {


    res.render('index.ejs');

})


route.get('/index.ejs', (req, res, next) => {

    res.render("index.ejs");

});

route.get('/1.ejs', (req, res, next) => {


    res.render("1.ejs");

})


route.get('/2.ejs', (req, res, next) => {


    res.render("2.ejs");
})


route.get('/3.ejs', (req, res, next) => {


    res.render("3.ejs");

})


route.get('/4.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("4.ejs", { price: data });

    })
})



route.get('/5.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("5.ejs", { price: data });

    })
})



    /

    route.get('/6.ejs', (req, res, next) => {

        sea.exec(function (err, data) {
            if (err) throw err;

            res.render("6.ejs", { price: data });

        })
    })
route.get('/7.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("7.ejs", { price: data });

    })
})



route.get('/8.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("8.ejs", { price: data });

    })
})


route.get('/9.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("9.ejs", { price: data });

    })
})
route.get('/10.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("10.ejs", { price: data });

    })
})
route.get('/11.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("11.ejs", { price: data });

    })
})
route.get('/12.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("12.ejs", { price: data });

    })
})
route.get('/13.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("13.ejs", { price: data });

    })
})
route.get('/14.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("14.ejs", { price: data });

    })
})



route.get('/15.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("15.ejs", { price: data });

    })
})




route.get('/16.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("16.ejs", { pricekareli: data });

    })
})
route.get('/17.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("17.ejs", { pricekareli: data });

    })
})
route.get('/18.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("18.ejs", { pricekareli: data });

    })
})
route.get('/19.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("19.ejs", { pricekareli: data });

    })
})
route.get('/20.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("20.ejs", { pricekareli: data });

    })
})
route.get('/21.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("21.ejs", { pricekareli: data });

    })
})
route.get('/22.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("22.ejs", { pricekareli: data });

    })
})
route.get('/23.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("23.ejs", { pricekareli: data });

    })
})
route.get('/24.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("24.ejs", { pricekareli: data });

    })
})
route.get('/25.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("25.ejs", { pricekareli: data });

    })
})
route.get('/26.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("26.ejs", { pricekareli: data });

    })
})
route.get('/27.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("27.ejs", { pricekareli: data });

    })
})


route.get('/28.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("28.ejs", { pricekareli: data });

    })
})


route.get('/contact.ejs', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("contact.ejs", { pricekareli: data });

    })
})



route.get('/loginform', (req, res, next) => {
    
    sea.exec(function (err, data) {
        if (err) throw err;
        
        res.render("loginform", { pricekareli: data });
        
    })
})


// For Registration 


// route.post("/loginform", async (req, res) => {

//     try {


//         const logindata = new wheat({

//             username: req.body.username,
//             password: req.body.password

//         })


//         const registeredlogin = await logindata.save();
//         res.status(201).render("login");


//     } catch (error) {

//         res.status(400).send(error);
//     }


// })



// For Login

app.post("/login",async (req,res)=>{

    try {
        

        const enteredusername = req.body.username;
        const enteredPassword = req.body.password;

        const username_is_ok =  await modulus.findOne({username:enteredusername});
        // console.log(email_is_ok);
        // console.log(email_is_ok.password);  ---> data base ka password 

        if (username_is_ok.password  === enteredPassword ) {

            res.render("index");
            
        } else {

            alert("Invalid Login Details :( ");

            
        }

        
        // console.log(`${enteredEmail} and ${enteredPassword}`);
    }
    
    catch (error) {

        res.send("Invalid Login Details ");
        
    }

   

});





route.get('/register', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("register", { price: data });

    })
})





route.post("/register", async (req, res) => {

    try {


        const dailydata = new wheat({

            date: req.body.date,
            // rice: req.body.rice,
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
            batriprice: req.body.batriprice,



            // Rice and Fall 

            Ricewheatprice: req.body.Ricewheatprice,
            Ricechanaprice: req.body.Ricechanaprice,
            Riceraharprice: req.body.Riceraharprice,
            Ricemoongprice: req.body.Ricemoongprice,
            Ricedhanprice: req.body.Ricedhanprice,
            Ricekrantidhanprice: req.body.Ricekrantidhanprice,
            Ricenumdhanprice: req.body.Ricenumdhanprice,
            Ricesoyabeanprice: req.body.Ricesoyabeanprice,
            Ricemasoorprice: req.body.Ricemasoorprice,
            Riceudhadprice: req.body.Riceudhadprice,
            Ricemakkaprice: req.body.Ricemakkaprice,
            Ricebatriprice: req.body.Ricebatriprice







        })


        const registered = await dailydata.save();
        res.status(201).render("index");


    }





    catch (error) {


        res.status(400).send(error);
    }



})














route.get('/registerkareli', (req, res, next) => {

    sea.exec(function (err, data) {
        if (err) throw err;

        res.render("registerkareli", { pricekareli: data });

    })
})





route.post("/registerkareli", async (req, res) => {

    try {


        const dailydatakareli = new wheat({

            karelidate: req.body.karelidate,
            kareliserial: req.body.kareliserial,

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
            karelibatriprice: req.body.karelibatriprice,

            // Rice And Fall 
            Ricekareliwheatprice: req.body.Ricekareliwheatprice,
            Ricekarelichanaprice: req.body.Ricekarelichanaprice,
            Ricekareliraharprice: req.body.Ricekareliraharprice,
            Ricekarelimoongprice: req.body.Ricekarelimoongprice,
            Ricekarelidhanprice: req.body.Ricekarelidhanprice,
            Ricekarelikrantidhanprice: req.body.Ricekarelikrantidhanprice,
            Ricekarelinumdhanprice: req.body.Ricekarelinumdhanprice,
            Ricekarelisoyabeanprice: req.body.Ricekarelisoyabeanprice,
            Ricekarelimasoorprice: req.body.Ricekarelimasoorprice,
            Ricekareliudhadprice: req.body.Ricekareliudhadprice,
            Ricekarelimakkaprice: req.body.Ricekarelimakkaprice,
            Ricekarelibatriprice: req.body.Ricekarelibatriprice




        })


        const registeredkareli = await dailydatakareli.save();
        res.status(201).render("index");


    }





    catch (error) {


        res.status(400).send(error);
    }



})




module.exports = route;