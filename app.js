const express = require('express');
require('dotenv').config()
const soundCloudRoute = require('./routes/SoundCloudRoute')
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');

const app = express();


app.use('/soundcloud', soundCloudRoute)
app.use('/media', express.static(process.env.SAVE_LOCATION), serveIndex(process.env.SAVE_LOCATION,{icons:true} ))


const port = 6587;
const host = 'localhost'
app.listen(port, () => console.log(`App is running @ http://${host}:${port}/`));