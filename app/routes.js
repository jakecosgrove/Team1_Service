const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/pelinincomequestion', function (req, res) {

    //make a variable and give it the value from 'pelinincomequestion'
    var Over16k = req.session.data['interview-needs']
        // Check whether the variable matches a condition
   if (Over16k == "No"){
   // Send user to next page
   res.redirect('/jake-confirmation')
} else {
    // Send user to ineligible page
    res.redirect('pelinincomeevidence')
  }
 })

module.exports = router
