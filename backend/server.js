const express = require('express');
const bodyParser = require('body-parser');
const basicRouter = require('./routes');
// require need to install package
// in terminal type npm i express
// and npm i nodemon
//https://stackoverflow.com/questions/1972242/how-to-auto-reload-files-in-node-js
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', basicRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})