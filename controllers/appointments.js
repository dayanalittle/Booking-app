import { Appointment } from '../models/appointment.js'



function newAppointment(req, res) {
  res.render("appointments/new", {
    title: "Book",
  })
}


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

function flipFlexible(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => {
    appointment.flexible = !appointment.flexible
    appointment.save()
    .then(()=> {
      res.redirect(`/appointments/${appointment._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointments')
  })
}

function edit(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => {
    res.render('appointments/edit', {
      appointment,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointments')
  })
}







export {
  newAppointment as new,
  index,
  create,
  show,
  flipFlexible,
  edit,
}