const {db} = require('./pgp');
const SellerService = {};


//CREAT SELLER
SellerService.create = (name, email) => {
    const sql = `INSERT INTO sellers (name, email) VALUES ($[name], $[email]) RETURNING id;`;
    return db.one(sql, {name, email});
  }

//READ SELLER
SellerService.read = (name) => {
    const sql = `
    SELECT 
      *
    FROM sellers
    WHERE
      sellers.name = $[name]
    `;
    return db.one(sql, {name});
  }
  
//SELLER UPDATE
  SellerService.update = (name, email) => {
    const sql = `
    UPDATE sellers
    SET
      email=$[email]
    WHERE
      name=$[name]
    `;
    return db.none(sql, {name, email});
  }

//DELETE SELLER
SellerService.delete = (name) => {
  const sql = `
  DELETE FROM sellers WHERE name=$[name]
  `;
  return db.none(sql, {name});
}



module.exports = SellerService;