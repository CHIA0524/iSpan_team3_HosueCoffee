import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function homeTopBTN(){
    return(
        <div className="topBTN">
                <Link to="#carouselExampleControls">
                <button>  <i className="fa-solid fa-chevron-up"></i> </button></Link>
            </div>
    )
}

export default homeTopBTN