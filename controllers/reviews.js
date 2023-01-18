import { Review } from '../models/review.js'

function newReview(req, res) {
  res.render("reviews/new", {
    title: "Reviews",
  })
}

function createReview(req, res) {
  Review.findById(req.params.id)
  .then(review => {
    reviews.push(req.body)
    review.save()
    .then(() => {
      res.redirect(`/review/new`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/review')
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