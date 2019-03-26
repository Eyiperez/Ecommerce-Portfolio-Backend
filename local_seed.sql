DROP DATABASE IF EXISTS myecommerce;
CREATE DATABASE myecommerce;

\c myecommerce;

CREATE TABLE sellers (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  seller_id VARCHAR UNIQUE NOT NULL,
  seller_photo VARCHAR NULL
);

CREATE TABLE shops (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  owner INT REFERENCES sellers(id) NOT NULL,
  description VARCHAR NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  shop_id INT REFERENCES shops(id) NOT NULL,
  name VARCHAR NOT NULL,
  price INT NOT NULL,
  image VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
   category VARCHAR NOT NULL,
   color VARCHAR NOT NULL
);

CREATE TABLE buyers (
  id SERIAL PRIMARY KEY,
  buyer_name VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  payment_info VARCHAR NULL
);

CREATE TABLE order_item (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  buyer_id INT REFERENCES buyers(id) NOT NULL,
  quantity INT NOT NULL,
  status VARCHAR NULL
);

INSERT INTO sellers (name, email, seller_id) VALUES
('Tom', 'tom@email.com', '1234zxcv'), 
('Sara', 'sara@email.com', '1234asdf'), 
('Luz', 'luz@email.com', '1234qwer');

INSERT INTO shops (name, owner, description) VALUES
('Balloon Shop', 1, 'the best prettiest balloons ever'), /* 1 */
('Favors Shop', 2, 'handmade, unique, best party favors'), /* 2 */
('Decorations Shop', 3, 'cheap, cool decorations');/* 3 */


INSERT INTO products (shop_id, name, price, image, description, category, color) VALUES
(1, 'Big balloon', 3, 'urlimage.com', 'giant balloon, pink, helium', 'babyshower', 'pink'), 
(1, 'Small balloon', 1, 'urlimage.com', 'yellow, air', 'birthday', 'yellow'),
(1, 'One balloon', 10, 'urlimage.com', 'number 1 balloon, silver', 'birthday', 'silver'),
(1, 'Heart shape', 10, 'urlimage.com', 'red, helium', 'wedding', 'red'),
(1, 'Star shape', 10, 'urlimage.com', 'gold, helium, cute balloon', 'graduation', 'gold'),
(2, 'Goodie bags', 30, 'urlimage.com', '12 goodie bags, kids party','birthday', 'multi'),
(2, 'Costume stickers', 15, 'urlimage.com', 'cool, funny stickers', 'wedding','multi'),
(2, 'Labels', 20, 'urlimage.com', '20 labels, handmade','graduation', 'multi'),
(2, 'Thank you notes', 40, 'urlimage.com', '20 thank you notes, hand painted, add your name', 'wedding','multi'),
(3, 'Center piece', 50, 'urlimage.com', 'unique, pink, baby shower','birthday', 'pink'),
(3, 'Happy Bday Banner', 15, 'urlimage.com', 'banner, 6ft long, color pink', 'birthday','pink'),
(3, 'Its a boy banner', 15, 'urlimage.com', 'banner, baby shower, blue','babyshower','blue');

INSERT INTO buyers (buyer_name, address, email, payment_info) VALUES
('Erika', 'something, NY 10002', 'erika@email.com', '425345646'),
('Taq','something, NY 10002', 'taq@emasil.com', '45356366'),
('Mo', 'something, NY 10002', 'mo@email.com', '45323672');

INSERT INTO order_item (product_id, buyer_id, quantity, status) VALUES
(1, 1, 1, 'not processed'),
(9, 1, 1, 'processed'),
(11, 2, 2, 'processed'),
(2, 3, 1, 'not processed');