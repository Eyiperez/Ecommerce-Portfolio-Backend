const admin = require("firebase-admin");

const serviceAccount = require("./firebase_key.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-ecommerce-app-ep.firebaseio.com"
});

module.exports = admin;