import axios from "axios";
import { create } from "zustand";

// Define Zustand store
const useNoteStore = create((set) => ({
  notes: [],
  createForm: { title: "", body: "" },
  updateForm: { _id: null, title: "", body: "" },

  fetchNotes: async () => {
    try {
      const response = await axios.get("/notes");
      set({ notes: response.data });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },

  createNote: async (e) => {
    e.preventDefault();
    try {
      const { createForm, notes } = useNoteStore.getState();
      const response = await axios.post(
        "/notes",
        createForm
      );
      const newNote = response.data.data;
      set({
        notes: [...notes, newNote],
        createForm: { title: "", body: "" },
      });
    } catch (error) {
      console.error("Error creating note:", error);
    }
  },

  updateNote: async (e) => {
    e.preventDefault();
    const {
      updateForm: { _id, title, body },
      notes,
    } = useNoteStore.getState();

    try {
      const response = await axios.put(`/notes/${_id}`, {
        title,
        body,
      });
      const updatedNote = response.data.data;
      set({
        notes: notes.map((note) => (note._id === _id ? updatedNote : note)),
        updateForm: { _id: null, title: "", body: "" },
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  },

  deleteNote: async (id) => {
    try {
      await axios.delete(`/notes/${id}`);
      const { notes } = useNoteStore.getState();
      set({
        notes: notes.filter((note) => note._id !== id),
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },

  setCreateForm: (form) => set({ createForm: form }),
  setUpdateForm: (form) => set({ updateForm: form }),
}));

export default useNoteStore;
