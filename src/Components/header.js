import React from "react";
import ProfileIcon from "../Assets/icons8-nome-50.png";
import "../Assets/Header.css";

const Components = () => (
  <div className="header">
    <h1>RocketFace</h1>
    <div>
      <h3>Meu perfil</h3>
      <img src={ProfileIcon} alt="profile" />
    </div>
  </div>
);

export default Components;
