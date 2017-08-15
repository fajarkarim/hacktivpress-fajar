var express = require('express')
var router = express.Router()
var articlesCtrl = require('../controllers/articlesController')

router.get('/', articlesCtrl.getAll)
router.get('/:id', articlesCtrl.getOne)
router.get('/author/:authorID', articlesCtrl.getByAuthor)
router.get('/category/:category', articlesCtrl.getByCategory)
router.post('/', articlesCtrl.create)
router.put('/:id', articlesCtrl.update)
router.delete('/:id', articlesCtrl.remove)

module.exports = router
