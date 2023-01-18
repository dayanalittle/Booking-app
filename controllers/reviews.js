import { Review } from '../models/review.js'

function newReview(req, res) {
    Review.find({})
    .then(review => {
      res.render('reviews/new', {
        title: 'Add Review',
        reviews,
      })
    })
    .catch(err => {
      res.redirect("/reviews")
    })
  }
  
  function createReview(req, res) {
    Review.findById(req.params.id)
    .then(review => {
      appointment.reviews.push(req.body)
      appointment.save()
      .then(() => {
        res.redirect(`/appointments/${appointment._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

export {
  newReview as new,
  createReview,
}