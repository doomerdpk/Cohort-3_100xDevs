const jwt = require("jsonwebtoken");

function Auth(req, res, next) {
  try {
    const token = req.headers.token;

    const verifiedData = jwt.verify(token, process.env.JWT_SECRET);
    if (verifiedData.id) {
      req.id = verifiedData.id;
      next();
    } else {
      res.status(400).json({
        error: "Invalid Credientails!",
      });
    }
  } catch (error) {
    console.error("error occured", error);
  }
}

module.exports = Auth;
