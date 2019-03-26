test('it should pass', () => {
    expect(true).toBe(true);
    })

// const request = require('supertest')

// jest.mock('../routes/seller')
// const { app, } = require('../app')
// const { SellerServices, } = require('../routes/seller')

// describe('testing the seller route', () => {
//     afterEach(() => {
//         jest.clearAllMocks()
//     });

//     // //SELLER POST ROUTE TESTS
//     // it('when making POST request to /seller, if db query is successful, expect 200', (done) => {
//     //     sellerRouter.post.mockImplementation(() => {
//     //         return Promise.resolve();
//         // })
//         // request(app)
//         //     .post('/seller')
//         //     .then(response => {
//         //         expect(response.status).toBe(200)
//         //         done()
//         //     })
//         //     .catch(err => {
//         //         res.status(400)
//         //         next(err);
//         //     })
//         // done()
//     // })

//     // it('when making POST request to /seller, if db query is NOT successful, expect 400', (done) => {
//     //     sellerRouter.post.mockImplementation(() => {
//     //         return Promise.reject();
//     //     })
//     //     request(app)
//     //         .post('/seller')
//     //         .then(response => {
//     //             expect(response.status).toBe(400)
//     //             done()

//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })

//     // //SELLER GET ROUTE TESTS
//     // it('when making GET request to /seller/:name, if db query is successful, expect 200', done => {
//     //     sellerRouter.get.mockImplementation(() => {
//     //         return Promise.resolve();
//     //     })
//     //     request(app)
//     //         .get('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(200)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })

//     // it('when making GET request to /seller/:name, if db query is NOT successful, expect 400', done => {
//     //     sellerRouter.get.mockImplementation(() => {
//     //         return Promise.reject();
//     //     })
//     //     request(app)
//     //         .get('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(400)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })


//     // //SELLER PUT ROUTE TESTS
//     // it('when making PUT request to /seller/:name, if db query is successful, expect 200', done => {
//     //     sellerRouter.put.mockImplementation(() => {
//     //         return Promise.resolve();
//     //     })
//     //     request(app)
//     //         .put('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(200)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })

//     // it('when making PUT request to /seller/:name, if db query is NOT successful, expect 400', done => {
//     //     sellerRouter.put.mockImplementation(() => {
//     //         return Promise.reject();
//     //     })
//     //     request(app)
//     //         .put('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(400)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })

//     // //SELLER DELETE ROUTE TESTS

//     // it('when making DELETE request to /seller/:name, if db query is successful, expect 200', done => {
//     //     sellerRouter.delete.mockImplementation(() => {
//     //         return Promise.resolve();
//     //     })
//     //     request(app)
//     //         .put('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(200)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })

//     // it('when making DELETE request to /seller/:name, if db query is NOT successful, expect 400', done => {
//     //     sellerRouter.delete.mockImplementation(() => {
//     //         return Promise.reject();
//     //     })
//     //     request(app)
//     //         .put('/seller/:name')
//     //         .then(response => {
//     //             expect(response.status).toBe(400)
//     //             done()
//     //         })
//     //         .catch(err => {
//     //             res.status(400)
//     //             next(err);
//     //         })
//     //     done()
//     // })
// })