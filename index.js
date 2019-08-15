const express = require('express')
const app = express()
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Welcome to A5B 2ND FLOOR!'))

app.get('/:person', (req, res) => {
  console.log("person is " + req.params.person);
  let people = {
    yusuf:"https://www.google.com",
    romeno:"https://www.wenogk.com"
  }
  if(people.hasOwnProperty(req.params.person)) {
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
