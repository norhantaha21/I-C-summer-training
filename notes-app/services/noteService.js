const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  const note = await Note.create({ ...req.body });
  res.status(201).json(note);
};

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find().sort('-updatedAt');
  res.json(notes);
};

exports.getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).send('Note not found');
  res.json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!note) return res.status(404).send('Note not found');
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).send('Note not found');
  res.send('Note deleted');
};

exports.filterNotes = async (req, res) => {
  const { isPinned, createdBy } = req.query;
  const filter = {};
  if (isPinned !== undefined) filter.isPinned = isPinned === 'true';
  if (createdBy) filter.createdBy = createdBy;
  const notes = await Note.find(filter).sort('-updatedAt');
  res.json(notes);
};