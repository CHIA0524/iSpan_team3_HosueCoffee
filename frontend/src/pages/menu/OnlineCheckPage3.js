import React from "react";
import { useState, useEffect } from "react";
import './scss/checkout3.scss'
import Space from "./component/Space";
import Process3 from "./Page3/Process3";
import Process3RWD from "./Page3/Process3RWD";
import PeopleNum from "./Page3/PeopleNum";
import Buyer from "./Page3/Buyer";
import Message from "./Page3/Message";
import Totalpay from "./Page3/Totalpay";





const OnlineCheckPage3 = () => {



 


    return(
            <>
                <Space />
                <Process3 />
                <Process3RWD />
                <Space />
                <PeopleNum />
                <Buyer />
                <Message />
                <Totalpay />
            </>




)

}

export default OnlineCheckPage3