const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    // get email and password from req.body
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({ email, password: hashedPassword });

    await user.save();

    res.json({
      message: "User created successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong: " + error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // check password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password",
        success: false,
      });
    }
    // generate token
    const expire = new Date(Date.now() + 1000 * 60 * 60 * 24 * 1); // 1 day
    const token = jwt.sign(
      { id: user._id, expire: expire },
      process.env.JWT_SECRET
    );

    //set the cookie
    res.cookie("Authorization", token, {
      expires: expire,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      //   data: { token },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong: " + error });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong: " + error });
  }
};

const checkAuth = (req, res) => {
  //   console.log(req.user);
  try {
    return res.status(200).json({ message: "Ok" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong: " + error });
  }
};

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
