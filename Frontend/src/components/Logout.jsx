// import React from 'react'

import { useEffect } from "react";
import authStore from "../stores/authStore";
import { Link } from "react-router-dom";

const Logout = () => {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-100">
      <div>
        <h1 className="text-3xl font-bold text-center text-blue-500">
          You are Logged Out
        </h1>
        <div className="flex justify-center gap-5 mt-5"> 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/">Go to Home</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/login">Login Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
