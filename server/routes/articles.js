var express = require('express')
var router = express.Router()
var articlesCtrl = require('../controllers/articlesController')
var util = require('../helpers/util')

router.get('/', articlesCtrl.getAll)
router.get('/author/:authorID', articlesCtrl.getByAuthor)
router.get('/category/:category', articlesCtrl.getByCategory)
router.get('/:id', util.authArticle, articlesCtrl.getOne)
router.post('/', articlesCtrl.create)
router.put('/:id', articlesCtrl.update)
router.delete('/:id', articlesCtrl.remove)

module.exports = router
