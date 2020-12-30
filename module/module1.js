const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/manohar', {useNewUrlParser: true , useUnifiedTopology: true } );



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("We are Connected with database ... ")
});


const mobileschemaw = new mongoose.Schema({
  wheatprice: String,
  chanaprice: String,
  raharprice: String,
  moongprice: String,
  dhanprice: String,
  krantidhanprice: String,
  numdhanprice: String,
  soyabeanprice: String,
  masoorprice: String,
  udhadprice: String,
  makkaprice: String,
  batriprice: String,

  date: String,
  // rice: String,
  serial: String,



  // Gadarwara Rice And Fall 


  Ricewheatprice: String,
  Ricechanaprice: String,
  Riceraharprice: String,
  Ricemoongprice: String,
  Ricedhanprice: String,
  Ricekrantidhanprice: String,
  Ricenumdhanprice: String,
  Ricesoyabeanprice: String,
  Ricemasoorprice: String,
  Riceudhadprice: String,
  Ricemakkaprice: String,
  Ricebatriprice: String,



  // karele mandi 
  karelidate: String,
  karelirice: String,
  kareliserial: String,

  
  kareliwheatprice: String,
  karelichanaprice: String,
  kareliraharprice: String,
  karelimoongprice: String,
  karelidhanprice: String,
  karelikrantidhanprice: String,
  karelinumdhanprice: String,
  karelisoyabeanprice: String,
  karelimasoorprice: String,
  kareliudhadprice: String,
  karelimakkaprice: String,
  karelibatriprice: String





});

const mobilemodalw = mongoose.model('manohariteam', mobileschemaw);



/*




const a = new mobilemodalw({
  date: '27-11-20 ', rice: "45", serial: "1",
  wheatprice: "1326-1426 ",
  chanaprice: "3780-4800 ",
  raharprice: "3700-5401 ",
  moongprice: " 5401-7370 ",
  dhanprice: "2190-2501 ",
  krantidhanprice: "1277-1680 ",
  numdhanprice: "1820-2475 ",
  soyabeanprice: "3000-4181 ",
  masoorprice: "3500-5125 ",
  udhadprice: " --- ",
  makkaprice: " 1113-1331 ",
  batriprice: "4295-5301 "
});



const b = new mobilemodalw({
  date: '26-11-20 ', rice: "45", serial: "2",
  wheatprice: "1206-1459 ",
  chanaprice: "3560-4851 ",
  raharprice: "5800-5800 ",
  moongprice: " 4000-6800 ",
  dhanprice: "2060-2529 ",
  krantidhanprice: "1251-1652 ",
  numdhanprice: "1700-2469 ",
  soyabeanprice: "3300-4081 ",
  masoorprice: "4750-5051 ",
  udhadprice: " --- ",
  makkaprice: "1101-1348 ",
  batriprice: "4525-4570 "
});




const c = new mobilemodalw({
  date: '25-11-20 ', rice: "45", serial: "3",
  wheatprice: "1206-1459 ",
  chanaprice: "3560-4851 ",
  raharprice: "5800-5800 ",
  moongprice: " 4000-6800 ",
  dhanprice: "2060-2529 ",
  krantidhanprice: "1251-1652 ",
  numdhanprice: "1700-2469 ",
  soyabeanprice: "3300-4081 ",
  masoorprice: "4750-5051 ",
  udhadprice: " --- ",
  makkaprice: "1101-1348 ",
  batriprice: "4525-4570 "
});


const d = new mobilemodalw({
  date: '24-11-20 ', rice: "123", serial: "4",
  wheatprice: " 1070-1475 ",
  chanaprice: "3900-4751 ",
  raharprice: "5700-5921 ",
  moongprice: "4000-6860 ",
  dhanprice: "1800-2460 ",
  krantidhanprice: "1210-1592 ",
  numdhanprice: "1953-2455 ",
  soyabeanprice: "3601-4100 ",
  masoorprice: "4850-5100 ",
  udhadprice: "---",
  makkaprice: "1200-1342 ",
  batriprice: "4100-5165"
});
const e = new mobilemodalw({
  date: '23-11-20 ', rice: "123", serial: "5",
  wheatprice: "1400-1480 ",
  chanaprice: "3900-4022 ",
  raharprice: "4651-5900 ",
  moongprice: "3001-7001 ",
  dhanprice: "1900-2461 ",
  krantidhanprice: "1150-1605 ",
  numdhanprice: "1900-2426 ",
  soyabeanprice: "3400-4076 ",
  masoorprice: "4200-5120 ",
  udhadprice: "---",
  makkaprice: "1150-1340 ",
  batriprice: "4525-4525 "
}); 


a.save(function (err, mobile) {
  if (err) return console.error(err);

});
b.save(function (err, mobile) {
  if (err) return console.error(err);

});
c.save(function (err, mobile) {
  if (err) return console.error(err);

});
d.save(function (err, mobile) {
  if (err) return console.error(err);

});
e.save(function (err, mobile) {
  if (err) return console.error(err);

});

*/

module.exports = mobilemodalw;