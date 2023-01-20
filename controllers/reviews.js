import { Review } from '../models/review.js'


function newReview(req, res) {
  Review.find()
    .then(reviews => {
      res.render('reviews/new', {
        reviews,
        title: "Reviews"
      })

    }).catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function create(req, res) {
  Review.create(req.body)
    .then(review => {
      review.save()
      res.redirect('/reviews/new')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}





export {
  newReview as new,
  create,

}