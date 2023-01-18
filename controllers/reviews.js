import { Review } from '../models/review.js'

function newReview(req, res) {
  res.render("reviews/new", {
    title: "Reviews",
  })
}

export {
newReview as new,
  
}