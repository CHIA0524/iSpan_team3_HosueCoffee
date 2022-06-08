import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';


function HomeNewComponent() {

    return (
        <>
         <div className="new">
                <h1>NEWS</h1>
                <div className="allNew">
                    <div className="new1 row">
                        <h5 className="col">嘉義店公休公告</h5>
                        <h5 className="newTime col">2022/06/17</h5>
                    </div>
                    <div className="new1 row">
                        <h5 className="col">台南店公休公告</h5>
                        <h5 className="newTime col">2022/06/17</h5>
                    </div>
                    <div className="new1 row">
                        <h5 className="col">高雄店公休公告</h5>
                        <h5 className="newTime col">2022/06/17</h5>
                    </div>
                    <div className="new1 row">
                        <h5 className="col">高雄店公休公告</h5>
                        <h5 className="newTime col">2022/06/17</h5>
                    </div>
                </div>
            </div>
    </>
    )
}

export default HomeNewComponent