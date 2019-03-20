const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/myecommerce');


module.exports = {
    db,
}