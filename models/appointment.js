import mongoose from 'mongoose'

const Schema = mongoose.Schema


const appointmentSchema = new Schema({
  name: String,
  date: {type: Date, required: true},
  time: {type: String, required: true},
  service: {type: String, required: true},
  flexible: {type: Boolean, required: true},
  phoneNumber: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  // comments: [commentSchema]
}, {
  timestamps: true
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export {
  Appointment
}