const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/redirect/', (req, res) => res.redirect('https://www.google.com'))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port!`))

//http.listen();
