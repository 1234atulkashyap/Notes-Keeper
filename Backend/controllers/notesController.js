


const Note = require("../models/note.js");

const fetchNotes = async (req, res) => {
  try {
    // Find all notes for the current user
    const notes = await Note.find({
      user: req.user._id,
    });
    // Respond with the notes
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getNoteById = async (req, res) => {
  try {
    // Get the id from the request
    const id = req.params.id;
    // Find the note with the id for the current user
    const note = await Note.findOne({ _id: id, user: req.user._id });
    // If the note was found, respond with it
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createNote = async (req, res) => {
  try {
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.create({
      title,
      body,
      user: req.user._id,
    });

    res.json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateNote = async (req, res) => {
  try {
    // Get the id from the request
    const noteId = req.params.id;

    // Get the data from the request
    const title = req.body.title;
    const body = req.body.body;

    // Find and update the note with the id for the current user
    const note = await Note.findOneAndUpdate(
      { _id: noteId, user: req.user._id },
      { title, body },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Respond with the updated note
    res.json({
      success: true,
      message: "Note updated successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletenote = async (req, res) => {
  try {
    // Get the id from the request
    const id = req.params.id;

    // Find and delete the note with the id for the current user
    const note = await Note.findOneAndDelete({ _id: id, user: req.user._id });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  fetchNotes,
  getNoteById,
  createNote,
  updateNote,
  deletenote,
};
