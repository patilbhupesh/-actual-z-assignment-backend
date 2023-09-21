const Projects = require("../models/project.model");

class ProjectController {
  async getProjects(req, res) {
    try {
      console.log(req.query);
      const sortDir = req.query.sortDir || "desc";
      const sortCol = req.query.sortCol || "createdAt";
      const limitValue = req.query.pageSize || "3";
      const skipValue = (req.query.pageNo - 1) * limitValue || "0";
      let search = { isDeleted: false };
      if (req.query.search) {
        search = {
          ...search,
          title: { $regex: req.query.search, $options: "i" },
        };
      }

      let totalCount = await Projects.find(search, "-isDeleted -__v").count();

      let response = await Projects.find(search, "-isDeleted -__v")
        .sort({ [sortCol]: sortDir })
        .limit(limitValue)
        .skip(skipValue);

      let resJson = {
        data: response,
        pageSize: limitValue,
        pageNo: req.query.pageNo || "1",
        totalCount: totalCount,
      };
      res.json(resJson);
    } catch (err) {
      console.log(err.message);
    }
  }



  async addProjects(req, res) {
    try {
      let reqBody = req.body;
      reqBody.createdBy = "121212";
      reqBody.updatedBy = "121212";
      let projectsObj = new Projects(reqBody);
      let response = await projectsObj.save();
      res.status(201).json(response);
    } catch (err) {
      console.log(err.message);
    }
  }



}

module.exports = new ProjectController();
