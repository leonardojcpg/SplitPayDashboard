import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faSearch,
  faComment,
  faPaperPlane,
  faThumbsUp,
  faBroadcastTower,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import userProfileImage from "./assets/userProfileImage.svg"
import "./styles.css"

export const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <h1>Dashboard</h1>
        <div className="search-container">
          <input type="text" placeholder=" Pesquisar" className="searchInput" />
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
    </>
  );
};
