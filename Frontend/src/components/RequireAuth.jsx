// import React from 'react'

import { useEffect } from "react";


import authStore from "../stores/authStore";
import Hero from "./Hero";

const RequireAuth = (props) => {

  const store = authStore();

  useEffect(() => {
    if (!store.loggedIn) {
      store.checkAuth();
    }
  }, []);

  if (!store.loggedIn) {
    return <>
      <div className="max-w-screen max-h-screen">
        <Hero/>
      </div>
    </>;
  }



  return (
    // eslint-disable-next-line react/prop-types
    <div>{props.children}</div>
  );
};

export default RequireAuth;
