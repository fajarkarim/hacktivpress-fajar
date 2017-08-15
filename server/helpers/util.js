
var jwt = require('jsonwebtoken')
var User = require('../models/user')
var Article = require('../models/article')

var authArticle = (req, res, next) => {
  let token = req.headers.token
  if (!token) {
    res.status(403).send(`please logged in first`)
  }
  let decode = jwt.verify(token, process.env.SECRET)
  if (!decode) {
    res.send(`wrong token`)
  } else {
    Article.findById(req.params.id)
    .populate('author')
    .then(article => {      
      if (article.author.username == decode.username) {
        next()
      } else {
        res.send(`its not yours`)
      }
    })
  }
}

module.exports = { authArticle }
