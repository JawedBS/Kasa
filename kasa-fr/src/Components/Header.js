import "../Styles/Header.css";
import Logo from "../Kasa.svg"
import { Link } from "react-router-dom";

function Header() {
    return <header>
      <img src={Logo}/>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
    </header>
  }
  export default Header