const request = require('supertest')

jest.mock('../services/buyer')
const BuyerService = require('../services/buyer');

const { app, } = require('../app')

describe('testing the buyer service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  it('when making POST request to /buyer, if db query is successful, expect 200', (done) => {
    BuyerService.create.mockImplementationOnce(() => {
      return Promise.resolve({
        id: 'test-id'
      });
    })
    request(app)
      .post('/buyer/')
      .send({
        name: 'a',
        address: 'n',
        email: 'e',
        payment_info: 'p'
      })
      .then(data => {
        expect(data.status).toBe(200)
        expect(data.body).toEqual({ success: `Created buyer named a with generated ID: test-id` })
        done()
      })
   
  })

  // it('when making POST request to /buyer, if db query is NOT successful, expect 400', async (done) => {
  //   BuyerService.create.mockImplementationOnce(() => {
  //     return Promise.reject();
  //   })
  //   request(app)
  //     .post('/buyer/')
  //     .send({
  //       name: 'a',
  //       address: 'n',
  //       email: 'e',
  //       payment_info: 'p'
  //     })
  //     .catch(e => {
  //       expect(e.status).toBe(400)
  //       done()
  //     })

  // })

  // it('when making POST request to /buyer, if request body does NOT have required values, expect 400', async (done) => {
  //   request(app)
  //     .post('/buyer/')
  //     .catch(e => {
  //       expect(e.status).toBe(400)
  //       done()
  //     })

  // })

  it('when making GET request to /buyer/:name, if db query is successful, expect 200', done => {
    BuyerService.read.mockImplementation(() => {
      return Promise.resolve();
    })
    request(app)
      .get('/buyer/:name')
      .then(response => {
        expect(response.status).toBe(200)
        done()
      })

  })

  // it('when making GET request to /buyer/:name, if db query is NOT successful, expect 400', async done => {
  //   BuyerService.read.mockImplementation(() => {
  //     return Promise.reject();
  //   })
  //   request(app)
  //     .get('/buyer/:name')
  //     .catch(e => {
  //       expect(e.status).toBe(400)
  //       done()
  //     })

  // })

})