const express = require('express')
const app = express()
const port = process.env.PORT || '8000',
//setting middleware
// app.use(express.static(__dirname + 'docs')); //Serves resources from public folder
// app.get('/', (req, res) => res.send('Node Hello World!'))


app.use(express.static('docs'));

//Serves all the request which includes /images in the url from Images folder
app.use('/', express.static(__dirname + '/docs'));


process
  .on('unhandledRejection', (reason, p) => {
    // tslint:disable:no-console
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown');
    // process.exit(1);
  });


app.listen(port, () => console.log('Example app listening on port `${port}`!'))
