const express = require('express');
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
  filterNotes
} = require('../services/noteService');
const {
  createNoteValidator,
  updateNoteValidator
} = require('../validators/noteValidator');
const validate = require('../middleware/validate');
const router = express.Router();

router.route('/')
  .post(validate(createNoteValidator), createNote)
  .get(getAllNotes);

router.route('/filter')
  .get(filterNotes);

router.route('/:id')
  .get(getNoteById)
  .put(validate(updateNoteValidator), updateNote)
  .delete(deleteNote);

module.exports = router;