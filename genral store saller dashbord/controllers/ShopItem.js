const ShopItem = require('../modal/ShopItem')

exports.getAllShopItems = (req, res, next) => {
    ShopItem.findAll().then(shopitems => {
        res.json(shopitems);
    }).catch(err => {
        res.json(err);
    })
}

exports.createNewShopItem = (req, res, next) => {
    console.log(req.body)
    const { name,description,quantity,price } = req.body;
    ShopItem.create({
        name:name,
        description:description,
        quantity:quantity,
        price:price
    }).then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })

}

exports.updateShopItem = (req, res, next) => {
    const id = req.params.itemId
    const updatedDetails = req.body;
    ShopItem.findByPk(id).then(user => {
        user.name = updatedDetails.name;
        user.description = updatedDetails.description;
        user.price = updatedDetails.price;
        user.quantity = updatedDetails.quantity;
        user.save().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

exports.deleteAppointment = (req, res, next) => {
    const id = req.params.itemId;
    ShopItem.findByPk(id).then(shopitem => {
        shopitem.destroy().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

