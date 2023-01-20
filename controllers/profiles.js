import { Profile } from '../models/profile.js'

function index(req, res) {
  if (req.user) {
    Profile.find({})
      .then(profiles => {
        res.render('profiles/index', {
          profiles,
          title: "Profiles"
        })
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
  } else {
    res.redirect('/')
  }
}

function show(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      const isSelf = profile._id.equals(req.user.profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/profiles")
    })
}

function edit(req, res) {
  Profile.findById(req.params.id)
    .then(profile => {
      res.render('profiles/edit', {
        profile,
        title: "Edit Profile"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(profile => {
      res.render(`/profiles/${req.params.id}`, {
        title: "Profile",
        profile
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
}








export {
  index,
  show,
  edit,
  update
}