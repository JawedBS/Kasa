import React from "react";
import "../Styles/Housing.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import Carousel from "./Carousel";
import Tag from "./Tag";
import Info from "./Info";
import Host from "./Host"
import StarRating from './StarRating';
 

const Housing = () => {
    const { id } = useParams();
    const [housing, setHousing] = useState(null);

    useEffect(() => {
        fetch("../Kasa.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedHousing = data.find(item => item.id === id);
                setHousing(selectedHousing);
            });
    }, [id]);
    return (
        <div className="main">
             {housing && (
                <>
                    
                    <Carousel pictures={housing.pictures} />
                    <div className="appartmentInfo">
                    <div className="appartmentTag">
                    <Info appartmentTitle={housing.title} locationInfo={housing.location} />
                    <div className="tags-container">
                        {housing.tags.map((tag, index) => (
                            <Tag key={index} tagText={tag} />
                        ))}
                    </div>
                    </div>
                    <div className="hostRating">
                    <Host hostName={housing.host.name} hostPicture={housing.host.picture}/>
                    <StarRating rating={housing.rating} />
                    </div>
                    </div>
                    <div className="collapseContainer">
                    <Collapse buttonText="Description" paragraphText={housing.description} />
                    <Collapse buttonText="Équipements" paragraphText={housing.equipments.join(" ")} />
                    </div>
          
                    
                    
                </>
            )}

        </div>
    );
};

export default Housing