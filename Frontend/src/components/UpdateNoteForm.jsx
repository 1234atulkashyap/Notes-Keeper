// import React from 'react'

import useNoteStore from "../stores/noteStore";

const UpdateNoteForm = () => {
  const { updateForm, setUpdateForm, updateNote } = useNoteStore();
  return (
    <div>
      {updateForm._id && (
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg top-0 left-0 right-0">
          <form onSubmit={updateNote}>
            <h2 className="text-3xl font-bold text-center text-blue-500">
              Update Note
            </h2>
            <input
              type="text"
              value={updateForm.title}
              onChange={(e) =>
                setUpdateForm({ ...updateForm, title: e.target.value })
              }
              placeholder="Title"
              required
              className=" mt-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={updateForm.body}
              onChange={(e) =>
                setUpdateForm({ ...updateForm, body: e.target.value })
              }
              placeholder="Body"
              required
              className=" mt-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className=" mt-5 w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Note
            </button>
            <button
              className=" mt-5 w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
              onClick={() => setUpdateForm({ _id: null, title: "", body: "" })}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateNoteForm;
