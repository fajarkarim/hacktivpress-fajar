var User = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var saltRounds = 10
var salt = bcrypt.genSaltSync(saltRounds);

var register = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, salt);
  let user = new User({
    username: req.body.username,
    password: hash
  })
  user.save()
  .then(created => res.send(created))
  .catch(err => res.status(500).send(err))
}

var login = (req, res) => {
  User.find({username: req.body.username})
  .then(user => {
    let token = jwt.sign({
      username: user.username
    }, process.env.SECRET)
  })
  .catch(err => res.send(err))
}
