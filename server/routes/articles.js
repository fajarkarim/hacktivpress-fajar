var express = require('express')
var router = express.Router()
var articlesCtrl = require('../controllers/articlesController')
var util = require('../helpers/util')

router.get('/', util.auth, articlesCtrl.getAll)
router.get('/:id', util.auth, articlesCtrl.getOne)
router.get('/author/:authorID', articlesCtrl.getByAuthor)
router.get('/category/:category', articlesCtrl.getByCategory)
router.post('/', articlesCtrl.create)
router.put('/:id', articlesCtrl.update)
router.delete('/:id', articlesCtrl.remove)

module.exports = router
