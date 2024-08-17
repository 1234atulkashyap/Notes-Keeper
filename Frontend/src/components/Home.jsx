// import React from 'react'

import CreateNote from "./CreateNote";
import Notes from "./Notes";
import UpdateNoteForm from "./UpdateNoteForm";

const Home = () => {
  return (
    <div className=" max-w-screen">
      <div className="flex flex-col items-center justify-center max-h-screen max-w-[1280px] mx-auto bg-slate-100">
        <Notes />
        <CreateNote />
        <UpdateNoteForm />
      </div>
    </div>
  );
};

export default Home;
