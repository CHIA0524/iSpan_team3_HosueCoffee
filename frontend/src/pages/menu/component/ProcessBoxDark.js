import React from "react";



const ProcessBoxDark = (props) => (
        <div className="col-2 processInBox processInBoxwhite">
            <span className="check2">{props.name}</span> 
            <span className="processInBoxNum processInBoxwhite ">{props.number}</span>
        </div>
)

export default ProcessBoxDark