[![Build Status](https://travis-ci.org/Eyiperez/Ecommerce-Portfolio-Backend.svg?branch=master)](https://travis-ci.org/Eyiperez/Ecommerce-Portfolio-Backend) 


# Ecommerce App Backend

Ecommerce App using express with two main user experiences, seller or buyer. The seller signs in and creates a shop, create products and keep track of orders. Buyer selects products, checks out and creates multiple orders.  

## Heroku Deployed

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://my-ecommerce-ep.herokuapp.com/)

## To Run

```
npm install
node index.js
```
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3084](http://localhost:3084) to view it in the browser.

## Routes

### /seller

POST : create '/' (name, email, seller_id, seller_photo)

GET : by name '/:name'

GET: by email, req.query '/'

PUT: by name '/:name'

DELETE : by namae '/:name'

### /buyer
 
POST : create '/' (name, address, email, payment_info) //not real payment info

GET: by name '/:name'

### /order

POST : create '/' (product_id, buyer_id, quantity, status)

### /shop

POST : create '/' (name, owner, description)

GET : by id '/:id'

GET : by name '/:name/all'

GET : shop's orders '/:id/orders'

GET : shop's products '/:id/products' (all, by color, or category)

PUT : by id '/:id'

PUT : update order status '/:id/orders'

### /product

POST : create '/' (shop_id, name, price, image, description, category, color, likes)

GET : by id '/:id'

GET : by color '/:color/color'

GET  : by category '/:category/category'

GET : by name '/:name/name'

GET : by description '/:description/description'

PUT : by id '/:id'

DELETE : by id '/:id'


## Travis

### `npm test`

Launches the test runner in the interactive watch mode.

## TO DO's
Complete testing.


