module.exports = {

    sendLogin: (req, res, next) => {
        const dbInstance = req.app.get("db")
        const bcrypt = req.app.get("bcrypt")
        const { username, password } = req.body
        const saltRounds = 10

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                dbInstance
                .createUser(username, hash)
                .then(() => res.status(200).send())
                .catch(() => res.status(500).send())
            })})
    },
}