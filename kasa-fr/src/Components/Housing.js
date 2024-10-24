import React from "react";
import { useParams } from "react-router-dom";

const Housing = () => {
    const { id }= useParams();
    console.log(id)
    return (
        <div className="main">

        </div>
    );
};

export default Housing