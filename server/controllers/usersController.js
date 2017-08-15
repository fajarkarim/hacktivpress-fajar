var User = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var saltRounds = 10
var salt = bcrypt.genSaltSync(saltRounds);

var getAll = (req, res) => {
  User.find()
  .then(users => res.send(users))
  .catch(err => res.status(500).send(err))
}

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
  User.findOne({username: req.body.username})
  .then(user => {
    console.log(user);
    let token = jwt.sign({
      username: user.username,
      userID: user._id
    }, process.env.SECRET)
    res.send({token: token, username: user.username})
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  login,
  register,
  getAll
}
