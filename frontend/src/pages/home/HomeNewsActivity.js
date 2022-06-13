import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';


import HomeNewComponent from './HomeNewComponent';
import HomeActivityComponent from './HomeActivityComponent';

function HomeNewActivity() {


    return (
        <div className="aside">
            <HomeNewComponent />
            
            <HomeActivityComponent />
            
        </div>
    )
}

export default HomeNewActivity