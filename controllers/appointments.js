import { Appointment } from '../models/appointment.js'

function index(req, res) {
  Appointment.find({})
  .then(appointments => {
    res.render('appointments/index', {
      appointments,
      title: "Book"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
export {
  index
}