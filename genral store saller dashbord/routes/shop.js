const express = require('express')
const router = express.Router();
const shopitmes = require('../controllers/ShopItem')

router.get('/items',shopitmes.getAllShopItems)
router.post('/itmes/addnewitem',shopitmes.createNewShopItem)
router.delete('/items/delete/:itemId',shopitmes.deleteAppointment)
router.put('/items/:itemId',shopitmes.updateShopItem)




module.exports = router ;