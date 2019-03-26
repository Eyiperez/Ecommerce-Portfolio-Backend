const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

const {homeRouter,} = require('./routes/home')
const {sellerRouter,} = require('./routes/seller');
const {shopRouter,} = require('./routes/shop');
const {buyerRouter,} = require('./routes/buyer');
const {productRouter,} = require('./routes/product');

app.use('/', homeRouter);
app.use('/seller', sellerRouter);
app.use('/shop', shopRouter);
app.use('/buyer', buyerRouter);
app.use('/product', productRouter);


module.exports = {
    app,
};
