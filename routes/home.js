const express = require('express');
const homeRouter = express.Router();


homeRouter.get('', (req, res) => {
    res.send(`<h1> THIS IS AN ECOMMERCE API </h1> </br> 
    <h1> There are private and public routes </h1>
    <h1> There are CRUD functions for routes :</h1> 
    <h2> /seller </h2> 
    <h2> /shop </h2>
     <h2> /product </h2> 
     <h2> /buyer </h2>`)
});


module.exports = homeRouter;