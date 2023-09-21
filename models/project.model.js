const mongoose = require("mongoose");

const pojectsSchema = mongoose.Schema(
  {
    fileBody: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
    createdBy: {
      type: String,
      required: false,
    },
    updatedBy: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Projects = mongoose.model("Projects", pojectsSchema);
module.exports = Projects;
