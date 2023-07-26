const express = require('express');
const router = express.Router()
const Controllers = require('../Controllers/Controllers')

router.get('/ ', Controllers.checkOddEven)
router.post('/register' , Controllers.Register)
router.post('/login' , Controllers.login)
router.post('/add-product' , Controllers.AddProduct)
router.post('/add-to-cart' , Controllers.addToCart)
router.get('/get-cart' , Controllers.getAllCartItems)
router.get('/get-product' , Controllers.getAllProducts)





module.exports = router 

