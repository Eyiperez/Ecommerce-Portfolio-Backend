const request = require('supertest')

const { app, } = require('../app')


test('when making GET request to /, if db query is successful, expect 200', done => {

    request(app)
        .get('')
        .then(response => {
            expect(response.text).toEqual(`<h1> THIS IS AN ECOMMERCE API </h1> </br> 
    <h1> There are private and public routes </h1>
    <h1> There are CRUD functions for routes :</h1> 
    <h2> /seller </h2> 
    <h2> /shop </h2>
     <h2> /product </h2> 
     <h2> /buyer </h2>`)
            done()

        })

})

