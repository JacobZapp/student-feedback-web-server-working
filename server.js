// This is importing Express library. using require instead of import
const express = require('express')


// importing path, needed because it helps figure out connections locations of where stuff is
const path = require('path')

// This is importing the body-parser post computing thing that is needed to use POST, but this just makes it exist, still needs to be enabled
const bodyParser= require('body-parser')


// importing index.js file, so we can use data and connect them
const indexRouter = require('./routes/index.js')

// This lines creates web application server
const app = express()

// This will enable parsing POST request payload or body, aka the information.
app.use(bodyParser.urlencoded({ extended: false }))

// This is saying all static or unchaning files are in public file
const staticFileLocation = path.join(__dirname, 'public')

// use the styles that are in the location we showed you
app.use(express.static(staticFileLocation))


// __dirname is where code is stored, creating path between main directory and views directory
// Tells app where the html files are
app.set('views', path.join(__dirname, 'views'))
// uses handlebars to generate views or html files in the views folder
app.set('view engine', 'hbs')

// all requests or asks for the app will be passed through indexRouter
app.use('/', indexRouter)

// Start server Running
// This means unless you are told to use a specific port, use 3000 instead and then showing a message
const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server Running of Port', server.address().port) //address.port is a function that will print message showing what port we are using
})



