const { db } = require('./pgp');
const ProductService = {};


//CREAT PRODUCT
ProductService.create = (shop_id, name, price, image, description, category, color, likes) => {
    const sql = `INSERT INTO products (shop_id, name, price, image, description, category, color, likes) VALUES ($[shop_id], $[name], $[price], $[image], $[description], $[category], $[color], $[likes]) RETURNING id;`;
    return db.one(sql, { shop_id, name, price, image, description, category, color, likes });
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

//GET ALL PRODUCTS BY COLOR
ProductService.readAllColor = (color) => {
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
  return db.any(sql, { color });
}


//GET ALL PRODUCTS BY CATEGORY
ProductService.readAllCat = (category) => {
    const sql = `
    SELECT 
     products.*,
     shops.name AS shop_name
    FROM products
    JOIN shops
    ON products.shop_id = shops.id
    WHERE
     products.category = $[category] 
  `;
  return db.any(sql, { category });
}

//GET ALL PRODUCTS BY NAME
ProductService.readAllName = (name) => {
    const likeName = `%${name}%`
    const sql = `
    SELECT 
     products.*,
     shops.name AS shop_name
    FROM products
    JOIN shops
    ON products.shop_id = shops.id
    WHERE
     products.name LIKE $[likeName] 
  `;
  return db.any(sql, { likeName });
}

//GET ALL PRODUCTS BY DESCRIPTION
ProductService.readAllName = (Des) => {
    const likeDes = `%${Des}%`
    const sql = `
    SELECT 
     products.*,
     shops.name AS shop_name
    FROM products
    JOIN shops
    ON products.shop_id = shops.id
    WHERE
     products.description LIKE $[likeDes] 
  `;
  return db.any(sql, { likeDes });
}

//PUT- UPDATE PRODUCT INFO
ProductService.update = (name, price, description, id) => {
    const sql = `
      UPDATE products
      SET
        name=$[name],
        price=$[price],
        description=$[description]
      WHERE
        id=$[id]
      `;
    return db.none(sql, { name, price, description, id });
  }

//DELETE SHOP
ProductService.delete = (id) => {
  const sql = `
  DELETE FROM products WHERE id=$[id]
  `;
  return db.none(sql, {id});
}


module.exports = ProductService;