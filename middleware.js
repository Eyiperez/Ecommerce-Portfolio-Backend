const admin = require('./firebase');

const checkFirebaseToken = (req, res, next) => {
  const { token } = req.body;
  console.log('at middleware')
  admin.auth().verifyIdToken(token)
    .then(function (decodedToken) {
      const uid = decodedToken.uid;
      next();
    }).catch(function (error) {
      // Handle error
      res.json('ERROR!!!!')
    });
}

module.exports = checkFirebaseToken ;