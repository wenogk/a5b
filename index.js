const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Welcome to A5B 2ND FLOOR!'))

app.get('/:person', (req, res) => {
  let people = {
    "yusuf":"https://www.google.com",
    "romeno":"https://www.wenogk.com"
  }
  if(req.params.person in people) {
    let person =req.params.person;
    res.redirect(people.person);
  } else {
    res.send('I think you are lost. Welcome to A5B 2ND FLOOR though!')
  }

});

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port!`))

//http.listen();
