const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema(
  {
    descText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    technology: []
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// projectSchema.virtual('techCount').get(function() {
//   return this.technology.length;
// });

const Project = model('Project', projectSchema);

module.exports = Project;
