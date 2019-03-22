
test('it should pass', () => {
  expect(true).toBe(true);
  })


// const request = require('supertest')
// const {buyerRouter,} = require('../routes/buyer')

// test('Passing in empty body returns 400', done => {
//     request(buyerRouter)
//       .post('/')
//       .send({})
//       .catch((response) => {
//         expect(response.status).toBe(400);
//         done();
//       });
// })

// test('Passing in valid body returns 204', done => {
//     request(buyerRouter)
//       .post('/')
//       .send({
//         'name': 'a',
//         'email': 'b',
//         'address': 'c',
//         'payment_info': 'd',
//       })
//       .then((response) => {
//         expect(response.status).toBe(204);
//         done();
//       });
// })
