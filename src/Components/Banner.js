import "../Styles/Banner.css";

function Banner({imgSrc,title,imgAlt}) {
    return<div className="Banner-zone"> <img className="Banner-image" src={imgSrc} alt={imgAlt}/>
      <h2>{title}</h2>
    </div>
  }
  export default Banner