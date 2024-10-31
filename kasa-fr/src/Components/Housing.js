import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import Carousel from "./Carousel";
 

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
                    <h1>{housing.title}</h1>
                    <Collapse buttonText="Description" paragraphText={housing.description} />
                    <Collapse buttonText="Équipements" paragraphText={housing.equipments.join(", ")} />
                </>
            )}
        </div>
    );
};

export default Housing