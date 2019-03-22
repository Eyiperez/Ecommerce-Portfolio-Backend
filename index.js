const {app,} = require('./app')
 const port = process.env.PORT || 3084;

app.listen(port, () => {
    console.log('listening on port: 3084')
});