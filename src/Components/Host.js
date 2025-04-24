import "../Styles/Host.css"
function Host({ hostName, hostPicture}) {
    return <div className="host-Info">
    <p className="host-Name">{hostName}</p>
    <img className="host-Picture" src={hostPicture} alt="photo de l'hôte"/>
    </div>
}

export default Host