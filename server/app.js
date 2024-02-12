const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes/Routes');
const connectDB = require('./config/config');

const app = express();
const port = 3001;

// Middleware to parse incoming request bodies
app.use(bodyParser.json()); // for parsing application/json

connectDB();

app.post('/create',Routes);
app.post('/reademail',Routes);
app.get('/readall',Routes);

app.listen(3001,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});