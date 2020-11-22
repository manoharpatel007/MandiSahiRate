const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/manohar', { useNewUrlParser: true, useUnifiedTopology: true });


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
  rice: String,
  serial: String,



});

const mobilemodalw = mongoose.model('manohariteam', mobileschemaw);





const a = new mobilemodalw({
  date: '20-11-20 ', rice: "123", serial: "*",
  wheatprice: "1450-1540 ",
  chanaprice: "1450-1540 ",
  raharprice: "1450-1540 ",
  moongprice: "1450-1540 ",
  dhanprice: "1450-1540 ",
  krantidhanprice: "1450-1540 ",
  numdhanprice: "1450-1540 ",
  soyabeanprice: "1450-1540 ",
  masoorprice: "1450-1540 ",
  udhadprice: "1450-1540 ",
  makkaprice: "1450-1540 ",
  batriprice: "1450-1540 "
});



const b = new mobilemodalw({
  date: '19-11-20 ', rice: "123", serial: "*",
  wheatprice: "1450-1540 ",
  chanaprice: "1450-1540 ",
  raharprice: "1450-1540 ",
  moongprice: "1450-1540 ",
  dhanprice: "1450-1540 ",
  krantidhanprice: "1450-1540 ",
  numdhanprice: "1450-1540 ",
  soyabeanprice: "1450-1540 ",
  masoorprice: "1450-1540 ",
  udhadprice: "1450-1540 ",
  makkaprice: "1450-1540 ",
  batriprice: "1450-1540 "
});




const c = new mobilemodalw({
  date: '18-11-20 ', rice: "123", serial: "*",
  wheatprice: "1450-1540 ",
  chanaprice: "1450-1540 ",
  raharprice: "1450-1540 ",
  moongprice: "1450-1540 ",
  dhanprice: "1450-1540 ",
  krantidhanprice: "1450-1540 ",
  numdhanprice: "1450-1540 ",
  soyabeanprice: "1450-1540 ",
  masoorprice: "1450-1540 ",
  udhadprice: "1450-1540 ",
  makkaprice: "1450-1540 ",
  batriprice: "1450-1540 "
});


const d = new mobilemodalw({
  date: '17-11-20 ', rice: "123", serial: "*",
  wheatprice: "1450-1540 ",
  chanaprice: "1450-1540 ",
  raharprice: "1450-1540 ",
  moongprice: "1450-1540 ",
  dhanprice: "1450-1540 ",
  krantidhanprice: "1450-1540 ",
  numdhanprice: "1450-1540 ",
  soyabeanprice: "1450-1540 ",
  masoorprice: "1450-1540 ",
  udhadprice: "1450-1540 ",
  makkaprice: "1450-1540 ",
  batriprice: "1450-1540 "
});
const e = new mobilemodalw({
  date: '16-11-20 ', rice: "123", serial: "*",
  wheatprice: "1450-1540 ",
  chanaprice: "1450-1540 ",
  raharprice: "1450-1540 ",
  moongprice: "1450-1540 ",
  dhanprice: "1450-1540 ",
  krantidhanprice: "1450-1540 ",
  numdhanprice: "1450-1540 ",
  soyabeanprice: "1450-1540 ",
  masoorprice: "1450-1540 ",
  udhadprice: "1450-1540 ",
  makkaprice: "1450-1540 ",
  batriprice: "1450-1540 "
});

/*
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