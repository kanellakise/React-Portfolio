const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema for projects. Can define project
const projectSchema = new Schema(
  {
    descText: {
      type: String,
      minlength: 1,
      maxlength: 1000
    },
    projectTier: {
      type: Number
    },
    imagePath: {
      type: String,
      minlength: 1,
      maxlength: 100
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    technology: []
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

// Optional technology count virtual... may not use
// projectSchema.virtual('techCount').get(function() {
//   return this.technology.length;
// });

const Project = model('Project', projectSchema);

module.exports = Project;
