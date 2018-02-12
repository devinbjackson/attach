const cors = require("cors");
const axios = require("axios");
const bcrypt = require("bcrypt");
const express = require("express");
const massive = require("massive");
const passport = require("passport");
const { json } = require("body-parser");
const session = require("express-session");
const controller = require("./controller.js")
const connectionString = require("../config").massive
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

app.set("bcrypt", bcrypt)

const massiveConnection = massive(connectionString)
  .then(db => app.set("db", db))
  .catch(console.log) 






app.post('/api/sendlogin', controller.sendLogin)


app.listen(port, () => {
    console.log(`Listening on dat port: ${port}`)
  })