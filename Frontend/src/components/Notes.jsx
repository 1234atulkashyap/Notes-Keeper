

import { useEffect, useState } from "react";
import useNoteStore from "../stores/noteStore";

const Notes = () => {
  const { fetchNotes, notes, deleteNote, setUpdateForm } = useNoteStore();
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
        await fetchNotes();
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      } finally {
        setLoading(false);
      }
    };
    loadNotes();
  }, [fetchNotes]);

  const NoteSkeleton = () => (
    <li className="bg-white shadow-md rounded-lg p-4 animate-pulse mt-32">
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </li>
  );

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center mt-10">My Notes</h1>
      <div className="h-72 overflow-y-auto p-10 bg-red-100 rounded-md">
        {loading ? (
          <ul className="space-y-4">
            {/* Render skeletons while loading */}
            {[...Array(3)].map((_, index) => (
              <NoteSkeleton key={index} />
            ))}
          </ul>
        ) : notes.length > 0 ? (
          <ul className="space-y-4">
            {notes.map((note) => (
              <li
                key={note._id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                  <p className="text-gray-700">{note.body}</p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-2">
                  <button
                    onClick={() => setUpdateForm(note)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No notes available</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
