const Express = require('express')
const sequelize = require('./database/database')
const appointmentsRoutes = require('./routes/appointments')
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const cors = require('cors') ;
const app = Express();
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static(publicPath));
app.use(appointmentsRoutes);


sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>console.log(err))




