import splitPayLogo from "./assets/splitPayLogo.svg"
import orangeMenuButtonIcon from "./assets/orangeMenuButtonIcon.svg"
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
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

export const Sidebar = () => {
  return (
    <>
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
    </>
  );
};
