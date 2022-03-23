const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/pelinincomequestion', function (req, res) {

    //make a variable and give it the value from 'pelinincomequestion'
    var Over16k = req.session.data['interview-needs']
        // Note: above is the radio answers name
        // Check whether the variable matches a condition
   if (Over16k == "No"){
   // Send user to next page
   res.redirect('/jake-confirmation')
} else {
    // Send user to ineligible page
    res.redirect('pelinincomeevidence')
  }
 })
 
 router.post('/V2/eligibility-referral', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var eligibilityIncome = req.session.data['eligibility-income-check']
     // Check whether the variable matches a condition
    if (eligibilityIncome == "Yes"){
      // Send user to next page
      res.redirect('/V2/eligibility-referral')
    } else {
      // Send user to ineligible page
      res.redirect('/V2/eligibility-no-income')
    }
   })

   router.post('/V2/referral-number', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var eligibilityReferral = req.session.data['eligibility-referral-check']
     // Check whether the variable matches a condition
    if (eligibilityReferral == "Yes"){
      // Send user to next page
      res.redirect('/V2/referral-number')
    } else {
      // Send user to ineligible page
      res.redirect('/V2/eligibility-no-referral')
    }
   })
 

module.exports = router


