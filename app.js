const express = require('express');
require('dotenv').config()
const soundCloudRoute = require('./routes/SoundCloudRoute')

const app = express();


app.use('/soundcloud', soundCloudRoute)


const port = 6587;
const host = 'localhost'
app.listen(port, () => console.log(`App is running @ http://${host}:${port}/`));