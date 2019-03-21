const { db } = require('./pgp');
const ProductService = {};


//CREAT PRODUCT
ProductService.create = (shop_id, name, price, image, description, category, color) => {
    const sql = `INSERT INTO products (shop_id, name, price, image, description, category, color) VALUES ($[shop_id], $[name], $[price], $[image], $[description], $[category], $[color]) RETURNING id;`;
    return db.one(sql, { shop_id, name, price, image, description, category, color });
}

// READ PRODUCT 
ProductService.read = (id) => {
    const sql = `
    SELECT 
     products.*,
     shops.name AS shop_name
    FROM products
    JOIN shops
    ON products.shop_id = shops.id
    WHERE
     products.id = $[id]  
  `;
  return db.one(sql, { id });
}

//GET ALL PRODUCTS
ProductService.readAll = (color) => {
    const sql = `
    SELECT 
     products.*,
     shops.name AS shop_name
    FROM products
    JOIN shops
    ON products.shop_id = shops.id
    WHERE
     products.color = $[color] 
  `;
  return db.one(sql, { color });
}




module.exports = ProductService;