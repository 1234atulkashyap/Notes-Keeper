if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const connectToDb = require("./config/connectToDb");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const notesController = require("./controllers/notesController");
const userController = require("./controllers/userController");
const requireAuth = require("./middleware/requireAuth");

const app = express();

//connect to Db
connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//  User Router
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
// app.get("/check-auth", requireAuth, userController.checkAuth);
app.get("/check-auth", requireAuth, userController.checkAuth);

//  Notes Router
app.get("/notes", requireAuth, notesController.fetchNotes);

app.get("/notes/:id", requireAuth, notesController.getNoteById);

app.post("/notes", requireAuth, notesController.createNote);

app.put("/notes/:id", requireAuth, notesController.updateNote);

app.delete("/notes/:id", requireAuth, notesController.deletenote);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
