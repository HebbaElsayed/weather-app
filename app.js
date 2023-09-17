const express = require('express');
const app = express();


//  Routes and Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const weatherRoute = require('./routes/weather');
app.use('/', weatherRoute);

//  View Engine
app.set('view engine', 'ejs');


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server starting at port ${PORT}...`));
