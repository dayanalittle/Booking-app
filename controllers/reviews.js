import { Review } from '../models/review.js'

function newReview(req, res) {
  res.render("reviews/new", {
    title: "Reviews",
  })
}

function index(req, res) {
  Review.find({})
  .then(reviews => {
    res.render('reviews/index', {
      appointments,
      title: "Review"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Review.create(req.body)
  .then(review => {
    res.redirect('/reviews')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/reviews')
  })
}


export {
newReview as new,
index,
create,
}