// models/Doctor.js
import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  Name:String,
  Specialization:String,
  Location:String,
  Location_Link:String,
  Qualification:String,
  Availability:String,
  Consultation_Fee:Number,
  Contact:String
});

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema)