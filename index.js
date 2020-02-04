const express = require('express')
const app = express()
const Data = require('./data');
const path = require('path');
const request = require('request')
app.use(express.urlencoded());

app.get('/', (req, res) => {
  let url = "http://www.dubaicoast.dm.gov.ae/API/Parameters/GetParameters?StationID=32&StartDate=2020-02-02"
  request(url, function(err, resp, body){
    let result;
    try {
      let jsonAll = JSON.parse(body);
      res.json(jsonAll)
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
