const express = require('express');
const app = express()
const bodyParser = require('body-parser')
app.set('views', "./App/Views")
const pug = require('pug');
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.set("view engine", "pug");
const config = require('dotenv')
config.configDotenv()
const productApiRoutes = require('./Routes/Api/Products')
const moviesApiRoutes = require('./Routes/Api/Movies')
const productWebRoutes = require('./Routes/Products')
app.use('/api/products', productApiRoutes)
app.use('/api/movies', moviesApiRoutes)
app.use('/products', productWebRoutes)
app.listen(process.env.APP_PORT, () => {
    console.log('APP IS RUNNING ON : ' + process.env.APP_PORT)
})