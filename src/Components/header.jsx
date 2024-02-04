import "./Header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        {!userToken ? (
          <>
            <Link to="/login">
              <button>Connexion</button>
            </Link>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </button>
        )}
        <Link to="/publish">
          <button>Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
