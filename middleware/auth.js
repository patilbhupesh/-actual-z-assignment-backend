module.exports = function auth(req, res, next) {
  if (true) {
    //Logic to verify token is valid
     res.header("Access-Control-Allow-Origin", "*");
    next();
  } else {
    res.send(401, "Unauthorized");
  }
};
