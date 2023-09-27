import React from "react";
import UserInfo from "./UserInfo";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <h1 className="h1">Get a random user</h1>
      </header>
      <UserInfo />
    </>
  );
};

export default App;
