DROP DATABASE IF EXISTS myecommerce;


CREATE TABLE sellers (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL
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

