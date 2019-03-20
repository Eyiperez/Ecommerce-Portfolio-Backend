const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

//const { isRequiredsNeeded, } = require('./services/utils')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

const sellerRouter = require('./routes/seller');


app.use('/seller', sellerRouter);

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
