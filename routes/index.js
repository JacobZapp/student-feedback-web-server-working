// Creating a router

// importing Express to make router
const express = require('express')

// Making Router object to figure out what code to run based on the requests
// based on URL, like GET, POST
const router = express.Router()


// Function always needs 3 arguments. req = request, res = Response, and the Next
// This will also respond to get requests for the home page
router.get('/', function(req, res, next) {
    // name of the template or handlebar files, generates HTML, optional object with data for the template
    // take handlebar file + data and put together to make html and send to client
    res.render('index.hbs', {
        title: 'Feedback Application',
        author: 'Jacob Zapp',
        timePageLoadedAt: new Date(),
    })

}) // a GET request to the homepaqe

router.get('/feedback-form', function (req, res, next) {
    res.render('student_feedback_form.hbs')
})

// This is posting /submit-feedback after the submit button is pressed. Meaning we have something that can handle that request
// req is requesting the url submit-feedback
// post is the same as get but encrypted. all the change is .post or .get
router.post('/submit-feedback', function (req,res, next) {
    // access the form data
    // req.query will take the parameters when I hit submit and turn them into objects.
    // const formData = req.query -- TODO this is for a GET request, using the URL query

    const formData = req.body // This is for posts, it uses the body of the request instead

    console.log(formData)


    // TODO - save to database
    // auto-email someone when feedback has been submitted

    // res.render here is sending data using this function withing the router.get code
    // All the data is coming from student_feedback_form.hbs. That's where the .name and things came from
    // When on the thank_you.hbs, the data that the user typed in will be displayed there and be sent from here.
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']

    })
})




// respond to any other requests for the router for anyone else that needs it
// always needs to be last line
module.exports = router