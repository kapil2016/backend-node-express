const Expense = require('../modal/expense')

exports.getAllExpenses = (req, res, next) => {
    Expense.findAll().then(expenses => {
        res.json(expenses);
    }).catch(err => {
        res.json(err);
    })
}

exports.createNewExpense = (req, res, next) => {
    console.log(req.body)
    const {title,amount,  date , category } = req.body;
    Expense.create({
        date: date,
        title: title,
        amount: amount,
        category:category
    }).then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })

}

exports.updateExpense = (req, res, next) => {
    const id = req.params.expenseId
    const updatedDetails = req.body;
    Expense.findByPk(id).then(expense => {
        expense.title = updatedDetails.title;
        expense.amount = updatedDetails.amount;
        expense.date = updatedDetails.date;
        expense.category = updatedDetails.category;
        expense.save().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

exports.deleteExpense = (req, res, next) => {
    const id = req.params.expenseId;
    Expense.findByPk(id).then(expense => {
        expense.destroy().then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    })
}

