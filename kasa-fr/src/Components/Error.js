import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/Error.css";

function Error () {
    return (
        <div className='Body'>
      <div className='main error-page'>
      <h1 className='error-title'>404</h1>
      <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='error-link' to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
    )
}

export default Error