const request = require('supertest')

jest.mock('../routes/buyer')
const { app, } = require('../app')
const { buyerRouter, } = require('../routes/buyer')

test('when making POST request to /buyer, if db query is successful, expect 200',  (done) => {
  buyerRouter.post.mockImplementation(() => {
    return Promise.resolve();
  })
  request(app)
    .post('/buyer')
    .then(response => {
      expect(response.status).toBe(200)
      done()
    })
  done()
})

test('when making POST request to /buyer, if db query is NOT successful, expect 400', (done) => {
  buyerRouter.post.mockImplementation(() => {
    return Promise.reject();
  })
  request(app)
    .post('/buyer')
    .then(response => {
      expect(response.status).toBe(400)
      done()

    })
  done()
})

test('when making GET request to /buyer/:name, if db query is successful, expect 200', done => {
  buyerRouter.get.mockImplementation(() => {
      return Promise.resolve();
  })
  request(app)
      .get('/buyer/:name')
      .then(response => {
          expect(response.status).toBe(200)
          done()
      })
      done()
})

test('when making GET request to /buyer/:name, if db query is NOT successful, expect 400', done => {
  buyerRouter.get.mockImplementation(() => {
      return Promise.reject();
  })
  request(app)
      .get('/buyer/:name')
      .then(response => {
          expect(response.status).toBe(400)
          done()
      })
      done()
})
