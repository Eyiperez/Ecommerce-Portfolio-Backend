const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/ecommerce');


module.exports = {
    db,
}