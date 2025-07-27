const Joi = require('joi');

exports.createNoteValidator = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  color: Joi.string().optional(),
  isPinned: Joi.boolean().optional(),
  tags: Joi.array().items(Joi.string()),
  createdBy: Joi.string().required()
});

exports.updateNoteValidator = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  color: Joi.string().optional(),
  isPinned: Joi.boolean().optional(),
  tags: Joi.array().items(Joi.string()),
  lastModifiedBy: Joi.string().required()
});