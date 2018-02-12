const cors = require("cors");
const axios = require("axios");
var bcrypt = require("bcrypt");
const express = require("express");
const massive = require("massive");
const passport = require("passport");
const { json } = require("body-parser");
const session = require("express-session");
const { secret } = require("./../config.js").session
const { domain, clientID, clientSecret } = require("../config").auth0

const port = process.env.PORT || 3777

const app = express()
app.use(json())
app.use(cors())
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false
  })
)











app.listen(port, () => {
    console.log(`Listening on dat port: ${port}`)
  })