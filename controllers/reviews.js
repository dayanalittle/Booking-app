import { Review } from '../models/review.js'

function newReview(req, res) {
    Review.find({})
    .then(reviews => {
      res.render('reviews/new', {
        title: 'Add Review',
        reviews,
      })
    })
    .catch(err => {
      res.redirect("/reviews")
    })
  }
  


export {
  newReview as new,
}