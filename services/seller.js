const { db } = require('./pgp');
const SellerService = {};


//CREAT SELLER
SellerService.create = (name, email, seller_id, seller_photo) => {
  const sql = `INSERT INTO sellers (name, email, seller_id, seller_photo) VALUES ($[name], $[email], $[seller_id], $[seller_photo]) RETURNING id;`;
  return db.one(sql, { name, email, seller_id, seller_photo });
}

//READ SELLER
SellerService.read = (name) => {
  const sql = `
    SELECT 
      sellers.*,
      shops.name AS shop_name
    FROM sellers
    JOIN shops
    ON shops.owner = sellers.id
    WHERE
      sellers.name = $[name];
    `;
  return db.one(sql, { name });
}

//READ SELLER BY EMAIL
SellerService.readByEmail = (email) => {
  const sql = `
    SELECT 
      sellers.*,
      shops.name AS shop_name,
      shops.id AS shop_id
    FROM sellers
    JOIN shops
    ON shops.owner = sellers.id
    WHERE
      sellers.email = $[email];
    `;
  return db.one(sql, { email });
}



//SELLER UPDATE
SellerService.update = (name, email) => {
  const sql = `
    UPDATE sellers
    SET
      email=$[email]
    WHERE
      name=$[name];
    `;
  return db.none(sql, { name, email });
}

//DELETE SELLER
SellerService.delete = (name) => {
  const sql = `DELETE FROM sellers WHERE name=$[name]`;
  return db.none(sql, { name });
}



module.exports = { SellerService, };