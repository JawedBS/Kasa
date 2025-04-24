import "../Styles/Info.css" 

function Info({ appartmentTitle, locationInfo}) {
    return <div>
    <h1 className="appartment-Title">{appartmentTitle}</h1>
    <p className="location-Info">{locationInfo}</p>
    </div>
}

export default Info