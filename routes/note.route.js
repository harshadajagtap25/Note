const { Router } = require("express");
const { NoteModel } = require("../models/note.model");
const noteController = Router();

noteController.get("/", async (req, res) => {
  const notes = await NoteModel.find({ userId: req.body.userId });
  res.send(notes);
});

noteController.post("/create", async (req, res) => {
  const { Heading, Note, Tag, userId } = req.body;
  const note = new NoteModel({ Heading, Note, Tag, userId });
  try {
    await note.save();
    res.status(201).send({ msg: "note created" });
  } catch (err) {
    res.send("Something went wrong");
  }
});

noteController.patch("/edit/:noteId", async (req, res) => {
  const { noteId } = req.params;
  const updatedNote = await NoteModel.findOneAndUpdate(
    { _id: noteId, userId: req.body.userId },
    { Heading: req.body.Heading, Note: req.body.Note, Tag: req.body.Heading }
  );
  if (updatedNote) res.send({ msg: "Note updated Successfully" });
  else res.send("Something went wrong");
});

noteController.delete("/delete/:noteId", async (req, res) => {
  const noteId = req.params.noteId;
  const deleteNote = await NoteModel.findOneAndDelete({
    _id: noteId,
    userId: req.body.userId,
  });
  if (deleteNote) res.send("Note Deleted Successfully");
  else res.send("Something went wrong");
});

module.exports = {
  noteController,
};
