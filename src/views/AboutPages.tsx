import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPages: React.FC = () => {
  const history = useNavigate();

  return (
    <>
      <h1>About</h1>
      <p>In this application you can save and manage your to-do list</p>
      <button className="btn" onClick={() => history("/todos")}>
        Back
      </button>
    </>
  );
};
