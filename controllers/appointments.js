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

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.flexible = !!req.body.flexible
  Appointment.create(req.body)
  .then(appointment => {
    res.redirect('/appointments')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointments')
  })
}

function show(req, res) {
  Appointment.findById(req.params.id)
  .populate("owner")
  .then(appointment => {
    res.render('appointments/show', {
      taco,
      title: "View Appointments"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointnments')
  })
}









export {
  index,
  create,
  show,
}