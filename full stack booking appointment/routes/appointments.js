const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/appointments',usersController.getAllAppointments)
router.post('/appointments/newappointment',usersController.createNewAppointment)
router.post('/appointments/delete/:userId',usersController.deleteAppointment)
router.post('/appointments/:userId',usersController.updateAppointment)




module.exports = router ;