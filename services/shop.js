const {db} = require('./pgp');
const ShopService = {};


//CREAT SHOP
ShopService.create = (name, owner, description) => {
    const sql = `INSERT INTO shops (name, owner, description) VALUES ($[name], $[owner], $[description]) RETURNING id;`;
    return db.one(sql, {name, owner, description});
  }

//READ SHOP
ShopService.read = (id) => {
    const sql = `
    SELECT 
    shops.*,
    sellers.name AS seller_name,
    sellers.email AS seller_email
  FROM shops
  JOIN sellers
    ON shops.owner = sellers.id
  WHERE
    shops.id = $[id]
  `;
    return db.one(sql, {id});
  }

//GET ALL SHOP'S PRODUCTS
ShopService.getAllProducts = (id) => {
    const sql = `
    SELECT
      p.*,
      s.name AS shop_name
    FROM products p
    JOIN shops s
      ON s.id = p.shop_id
    WHERE
      s.id = $[id]
    `;
    return db.any(sql, {id});
  }
  
//GET SHOP'S PRODUCTS BY CATEGORY
ShopService.getCategoryProducts = (id, category) => {
  const sql = `
  SELECT
    p.*,
    s.name AS shop_name
  FROM products p
  JOIN shops s
    ON s.id = p.shop_id
  WHERE
    s.id = $[id] AND p.category = $[category]
  `;
  return db.any(sql, {id, category});
}

//GET SHOP'S PRODUCTS BY COLOR
ShopService.getColorProducts = (id, color) => {
  const sql = `
  SELECT
    p.*,
    s.name AS shop_name
  FROM products p
  JOIN shops s
    ON s.id = p.shop_id
  WHERE
    s.id = $[id] AND p.color = $[color]
  `;
  return db.any(sql, {id, color});
}

//GET ORDERED PRODUCTS
ShopService.getOrders = (id) => {
  const sql = `
  SELECT
    o.*,
    order_item.quantity AS quantity
  FROM orders o
  JOIN order_item
    ON o.id = order_item.order_id
  WHERE
    o.id = $[id] 
  `;
  return db.any(sql, {id});
}

//UPDATE SHOP
  ShopService.update = (name, description, id) => {
    const sql = `
    UPDATE shops
    SET
      name=$[name],
      description=$[description]
    WHERE
      id=$[id]
    `;
    return db.none(sql, {name, description, id});
  }

//DELETE SHOP
// ShopService.delete = (id) => {
//   const sql = `
//   DELETE FROM shops WHERE id=$[id]
//   `;
//   return db.none(sql, {id});
// }



module.exports = ShopService;