import "../Styles/Header.css";
import Logo from "../Kasa.svg"
import { Link } from "react-router-dom";

function Header() {
    return <header>
      <h1><img src={Logo}/></h1>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
    </header>
  }
  export default Header