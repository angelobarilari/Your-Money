import { AiOutlineMenuUnfold } from "react-icons/ai";
import LogoutBtn from "../Logout-btn";
import LoginBtn from "../Login-btn";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  const token = localStorage.getItem("@TOKEN");
  const redirectButtons = ["Simulador", "Cotação", "Notícias", "Suporte"];

  return (
    <header id="home-header">
      <div id="header-container">
        <nav id="principal-menu">
          <AiOutlineMenuUnfold id="menu-icon" />
          <Link to="/">
            <button id="to-home-btn">
              {" "}
              Your <span> Money </span>{" "}
            </button>
          </Link>
        </nav>

        <div id="links-area">
          <div id="redirectBtns-container">
            {redirectButtons.map((element, index) => (
              <Link
                key={index}
                to={element
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()}
              >
                <button className="redirectBtn">{element}</button>
              </Link>
            ))}
          </div>

          <Link to="/login">
            <div id="login-logout-container">
              {token === null ? <LoginBtn /> : <LogoutBtn />}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header