import React from "react";
import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faMoneyBill,
  faExclamationCircle,
  faChartBar,
  faUsers,
  faCubes,
  faFolder,
  faCog,
  faQuestionCircle,
  faSignOut,
  faSearch,
  faComment,
  faPaperPlane,
  faThumbsUp,
  faBroadcastTower,
  faChartArea,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import splitPayLogo from "./assets/splitPayLogo.svg";
import orangeMenuButtonIcon from "./assets/orangeMenuButtonIcon.svg";
import userProfileImage from "./assets/userProfileImage.svg";
import MyCalendar from "./Components/Calendar/calendar";
import Cards from "./Components/Cards/cards";

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src={splitPayLogo} alt="Logo" />
        </div>
        <button className="menu-button">
          <img
            src={orangeMenuButtonIcon}
            alt="Menu Icon"
            className="menu-icon"
          />
          Menu
        </button>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <a href="/">Agenda</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <a href="/">Clientes</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBill} />
            <a href="/">Financeiro</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <a href="/">Pendências</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} />
            <a href="/">Relatórios</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} />
            <a href="/">Recursos Humanos</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCubes} />
            <a href="/">Estoque</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolder} />
            <a href="/">Pastas</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} />
            <a href="/">Configurações</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <a href="/">Ajuda</a>
          </li>
        </ul>
        <div className="logout">
          <FontAwesomeIcon icon={faSignOut} />
          <a href="/">Sair</a>
        </div>
      </aside>
      <main className="dashboardContainer">
        <header className="headerContainer">
          <h1>Dashboard</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder=" Pesquisar"
              className="searchInput"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon-input" />
          </div>
          <div className="search-icons">
            <FontAwesomeIcon icon={faCalendar} className="search-icon" />
            <FontAwesomeIcon icon={faComment} className="search-icon" />
            <FontAwesomeIcon icon={faPaperPlane} className="search-icon" />
            <FontAwesomeIcon icon={faThumbsUp} className="search-icon" />
            <FontAwesomeIcon icon={faBroadcastTower} className="search-icon" />
            <FontAwesomeIcon icon={faChartArea} className="search-icon" />
            <FontAwesomeIcon icon={faCog} className="search-icon" />
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
        <body>
        <section className="content">
          <Cards />
          <div className="agenda">
            <div className="agenda-header">
              <h2>Unidade São Paulo</h2>
              <div className="week-days">
                <div className="day">Seg</div>
                <div className="day">Ter</div>
                <div className="day">Qua</div>
                <div className="day">Qui</div>
                <div className="day">Sex</div>
                <div className="day">Sáb</div>
                <div className="day">Dom</div>
              </div>
              <button className="add-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <MyCalendar/>
          </div>
        </section>
        </body>
      </main>
    </div>
  );
}

export default App;
