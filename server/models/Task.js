const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  assignEmails: { type: [String], required: true }, // Changed to an array
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  taskFile: { type: String, required: true }, // store file path
  moduleId: { type: String, required: true }, // Added moduleId field
  submissions: [{
    filePath: String,
    assignEmail: String,
    day: String,
    createdAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);