const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

//const { isRequiredsNeeded, } = require('./services/utils')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

const homeRouter = require('./routes/home')
const sellerRouter = require('./routes/seller');
const shopRouter = require('./routes/shop');
const {buyerRouter,} = require('./routes/buyer');
const productRouter = require('./routes/product');

app.use('/', homeRouter);
app.use('/seller', sellerRouter);
app.use('/shop', shopRouter);
app.use('/buyer', buyerRouter);
app.use('/product', productRouter);

// app.post('/buyer', (req, res) => {
//     if (isRequiredsNeeded(req.body)) {
//         res.status(400)
//         res.send({
//             "msg": "some required values are missing",
//         })
//     }

//     res.status(204)
//     res.send()
// })

module.exports = {
    app,
};
