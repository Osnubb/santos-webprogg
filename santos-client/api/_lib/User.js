const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    section: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    role: {
      type: String,
      enum: ['Admin', 'Editor', 'Viewer'],
      default: 'Viewer',
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Prefer not to say'],
      default: 'Prefer not to say',
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
    shortBio: { type: String, default: '' },
  },
  { timestamps: true }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
