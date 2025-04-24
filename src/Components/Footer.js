import "../Styles/Footer.css";
import Logo from "../Kasa-white.svg"

function Footer() {
    return <div className="Footer-zone">
      <img className="Footer-img" src={Logo}/>
    <p className="Footer-text">© 2020 Kasa. All<br></br>rights reserved</p>
    </div>
  }
  export default Footer