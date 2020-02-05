const express = require('express')
const app = express()
const Data = require('./data');
const path = require('path');
const request = require('request')
app.use(express.urlencoded());
app.use(express.static('public'))
app.use('/scraper', express.static('public'))
app.get('/', (req, res) => {
      res.send("none");
});

app.get('/scrape', (req, res) => {
  let date = req.query.date;
  let station = req.query.station;
  /*
  let d = new Date();
  d = new Date(d.getTime());
  let date = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString());
  */
  let url = "http://www.dubaicoast.dm.gov.ae/API/Parameters/GetParameters?StationID=" + station + "&StartDate=" + date;

  request(url, function(err, resp, body){
    let result;
    try {
      let jsonAll = JSON.parse(body);
      jsonAll = {...jsonAll, url : url}
      res.json(jsonAll)
    }
    catch {
      res.send("none: " + url);
    }
});

});

app.get('/:person', (req, res) => {
   //either multiple or single
  console.log("person is " + req.params.person);
  let people = Data;
  let option = Data.method;
  if((people.hasOwnProperty(req.params.person)) && (option=="single")) {
    res.redirect(people.singleURL); //SINGLE URL
  } else if((people.hasOwnProperty(req.params.person)) && (option=="multiple")) {
      let person = req.params.person;
      res.redirect(people[person]);
  } else {
    res.send('I think you are lost. Welcome to A5B 2ND FLOOR though!')
  }

});
app.get("/asl" ,(req,res) => {
  res.sendFile(path.join(__dirname + '/asl.html'));
});
app.get("/package-lock.json" ,(req,res) => {
  res.sendFile(path.join(__dirname + '/package-lock.json'));
});
app.get("/qr/:person",(req,res)=> {
  let person = req.params.person;
  res.redirect("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://a5b.herokuapp.com/" + person);
});

app.listen(process.env.PORT || 3000, () => console.log("Stuff is happening."))
