const User = require('../modal/user')

exports.getAllAppointments = (req, res, next) => {
    User.findAll().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    })
}

exports.createNewAppointment = (req, res, next) => {
    console.log(req.body)
    const { email, phone, username } = req.body;
    User.create({
        username: username,
        email: email,
        phone: phone
    }).then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })

}

exports.updateAppointment = (req, res, next) => {
    const id = req.params.userId
    const updatedDetails = req.body;
    User.findByPk(id).then(user => {
        user.username = updatedDetails.username;
        user.email = updatedDetails.email;
        user.phone = updatedDetails.phone;
        user.save().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

exports.deleteAppointment = (req, res, next) => {
    const id = req.params.userId;
    User.findByPk(id).then(user => {
        user.destroy().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

