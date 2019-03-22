const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL || 'postgres://localhost/myecommerce');


module.exports = {
    db,
}