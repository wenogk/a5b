const express = require('express')
const app = express()
const Data = require('./data');
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Welcome to A5B 2ND FLOOR!'))

app.get('/:person', (req, res) => {
  let option = "multiple"; //either multiple or single
  console.log("person is " + req.params.person);
  let people = Data;
  if((people.hasOwnProperty(req.params.person)) && (option=="single")) {
    res.redirect(people.singleURL); //SINGLE URL
  } else if((people.hasOwnProperty(req.params.person)) && (option=="multiple")) {
      let person = req.params.person;
      res.redirect(people[person]);
  } else {
    res.send('I think you are lost. Welcome to A5B 2ND FLOOR though!')
  }

});

app.get("/qr/:person",(req,res)=> {
  let person = req.params.person;
  res.redirect("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://a5b.herokuapp.com/" + person);
});

app.listen(process.env.PORT || 3000, () => console.log("Stuff is happening."))
