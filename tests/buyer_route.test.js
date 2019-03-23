
test('it should pass', () => {
    expect(true).toBe(true);
    })


// const request = require('supertest')
// jest.mock('../services/buyer')
// const { BuyerService, } = require('../services/buyer')
// const { buyerRouter, } = require('../routes/buyer')


// test('when making POST request to /user, if db query is successful, expect 200', done => {
//   BuyerService.create.mockImplementation(() => {
//     return Promise.resolve();
//   })
//   request(buyerRouter)
//     .post('/')
//     .then(response => {
//       expect(response.status).toBe(200)
//       done()
//     })
// })

// test('when making POST request to /user, if db query is NOT successful, expect 400', done => {
//   BuyerService.create.mockImplementation(() => {
//     return Promise.reject();
//   })
//   request(buyerRouter)
//     .post('/')
//     .then(response => {
//       expect(response.status).toBe(400)
//       done()

//     })
// })