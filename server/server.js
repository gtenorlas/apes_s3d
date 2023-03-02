require('dotenv').config();
const express = require("express");
const app = express();


const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET_KEY]
}));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(process.env.PORT || 8080,()=>{
  console.log("Server running");
});
