module.exports = {

    sendRegister: (req, res, next) => {
        const dbInstance = req.app.get("db")
        const bcrypt = req.app.get("bcrypt")
        const { username, password } = req.body
        const saltRounds = 10

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) { //////// hashes your password right here, does all the hard work for you and the user.
                dbInstance    ///////// and here we simply throw it into the DB using massive, like we normally would, but we include the hashed password (known as hash now)
                .createUser(username, hash)
                .then(() => res.status(200).send())
                .catch(() => res.status(500).send())
            })})
    },

    confirmPassword: (req, res, next) => { //////////// this is not functioning yet, but this is an example of how you check for password correctness.
        const bcrypt = req.app.get("bcrypt")
        const { username, password } = req.body /////// incoming username and password to test against what the DB has stored in it.

        dbInstance
        .getUserAccount(username) ///// create a SQL file that runs a query like "SELECT * FROM attachuser WHERE username = $1", basic btch stuff.
        .then((response) => {
            let hash = response.password
            bcrypt.compare(password, hash).then(function(answer) {
                if (answer == true) {
                    req.session.user = response
                    res.status(200).send(true) /// here is where you tell the front end that the password was correct
                } else if (answer == false) {
                    res.status(200).send("BADPW") ////// here we're sending a text message back to the front end saying the password is bad, when React receives it, you tell the user their PW was wrong. Fcking idiot user.
                } else if (results.length < 1) {
                    res.status(200).send("UnknownUser") ////// we didn't find the username. That stupid user doesn't know their own user name! res send UnknownUser so React can tell them!
                }

            })})
    }   
}