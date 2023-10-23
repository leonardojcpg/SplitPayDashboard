import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import userProfileImage from "./assets/userProfileImage.svg";
import "./styles.css";

export const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="headerContainer">
      <h1>Dashboard</h1>
      <div className="search-container">
        <input type="text" className="searchInput" />
        <FontAwesomeIcon icon={faSearch} className="search-icon-input" />
      </div>
      <div className="search-icons">
        <FontAwesomeIcon icon={faCalendar} className="search-icon" />
        <FontAwesomeIcon icon={faCog} className="search-icon" />
        <button onClick={toggleTheme} className="theme-button">
          {theme === "light" ? "Modo Escuro" : "Modo Claro"}
        </button>
      </div>
      <div className="user-profile">
        <img
          src={userProfileImage}
          alt="User Profile"
          className="profile-image"
        />
        <div className="user-info">
          <div className="user-name">Leonardo Gomes</div>
          <div className="user-subtitle">Unidade São Paulo</div>
        </div>
      </div>
    </header>
  );
};
