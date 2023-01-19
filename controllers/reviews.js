import { Review } from '../models/review.js'


function newReview (req,res) {
    res.render("reviews/new", {
      title: "Add Review",
    })
  }

  function create(req, res) {
    Review.create(req.body)
    .then(review => {
      res.redirect('/')
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