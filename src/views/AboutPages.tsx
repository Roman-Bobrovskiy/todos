import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPages: React.FC = () => {
  const history = useNavigate();

  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        dolores harum dolorum dolor tenetur doloremque error reiciendis ducimus
        neque nam? Placeat dolore eligendi odit sint quis cum quibusdam, vero
        consequatur.
      </p>
      <button className="btn" onClick={() => history("/")}>
        Back
      </button>
    </>
  );
};
