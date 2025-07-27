const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  isPinned: Boolean,
  tags: [String],
  createdBy: String,
  lastModifiedBy: String
}, { timestamps: true });

noteSchema.virtual('summary').get(function() {
  return this.content?.substring(0, 50) + '...';
});

noteSchema.pre('find', function() {
  this.populate('createdBy').populate('lastModifiedBy');
});

noteSchema.pre('findOne', function() {
  this.populate('createdBy').populate('lastModifiedBy');
});

module.exports = mongoose.model('Note', noteSchema);