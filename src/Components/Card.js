import "../Styles/Card.css";

function Card({title, img, id}) {
    return <a href={"/housing/" + id} className="Card-content">
        <h2>{title}</h2>
        <img src={img} alt={title}/>
    </a>
  }
  export default Card