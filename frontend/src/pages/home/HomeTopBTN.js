import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

function homeTopBTN(){
    return(
        <div className="topBTN">
                <button> <a href="#carouselExampleControls"> <i className="fa-solid fa-chevron-up"></i> </a>
                </button>
            </div>
    )
}

export default homeTopBTN