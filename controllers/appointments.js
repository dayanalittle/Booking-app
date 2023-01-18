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
      appointment,
      title: "View Appointments"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointments')
  })
}

function flipFlexible(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => { 
    if (appointment.owner.equals(req.user.profile._id))
    appointment.flexible = !!appointment.flexible
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
function update(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => {
    if (appointment.owner.equals(req.user.profile._id)) {
      req.body.flexible = !!req.body.flexible
      appointment.updateOne(req.body)
      .then(()=> {
        res.redirect(`/appointments/${appointment._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/appointments`)
  })
}

function deleteAppointment(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => {
    if (appointment.owner.equals(req.user.profile._id)) {
      appointment.delete()
      .then(() => {
        res.redirect('/appointments')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/appointments')
  })
}

function createReview(req, res) {
  Appointment.findById(req.params.id)
  .then(appointment => {
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
  newAppointment as new,
  index,
  create,
  show,
  flipFlexible,
  edit,
  update,
  deleteAppointment as delete,
  createReview,
}