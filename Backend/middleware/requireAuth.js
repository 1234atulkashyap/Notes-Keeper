

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  try {
    // read token from cookie
    const token = req.cookies.Authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    /// decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);


    // check Expiry
        const expired = decoded.expire < Date.now();
        if (expired) {
            return res.status(401).json({ message: "Token expired" });
        }


    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Something went wrong" });
  }
};

module.exports = requireAuth;
