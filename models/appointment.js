import mongoose from 'mongoose'

const Schema = mongoose.Schema


const appointmentSchema = new Schema({
  name: String,
  date: Date,
  time: String,
  _id: String,
  service: String,
  flexible: Boolean,
  phoneNumber: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  // comments: [commentSchema]
}, {
  timestamps: true
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export {
  Appointment
}