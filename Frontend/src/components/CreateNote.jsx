// import React from 'react'

import useNoteStore from "../stores/noteStore";

const CreateNote = () => {
  const { createForm, updateForm, setCreateForm, createNote } = useNoteStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-100 ">
      <div>
        {!updateForm._id && (
          <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg top-0 left-0 right-0">
            <form onSubmit={createNote}>
              <h2 className="text-3xl font-bold text-center text-blue-500">
                Create Note
              </h2>
              <input
                type="text"
                value={createForm.title}
                onChange={(e) =>
                  setCreateForm({ ...createForm, title: e.target.value })
                }
                placeholder="Title"
                required
                className=" mt-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={createForm.body}
                onChange={(e) =>
                  setCreateForm({ ...createForm, body: e.target.value })
                }
                placeholder="Body"
                required
                className=" mt-5 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className=" mt-5 w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Note
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNote;
