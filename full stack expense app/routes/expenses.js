const express = require('express')
const router = express.Router();
const usersController = require('../controllers/expenses')

router.get('/',usersController.getAllExpenses)
router.post('/addnewexpense',usersController.createNewExpense)
router.delete('/delete/:expenseId',usersController.deleteExpense)
router.put('/:expenseId',usersController.updateExpense)




module.exports = router ;