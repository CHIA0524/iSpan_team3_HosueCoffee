import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import Process from '../menu/checkout';
import ProcessRwd from '../menu/ProcessRwd';

function Home(props){

    return(
      <>
          <Process/>
          <ProcessRwd/>
      </>    
    );
}

export default Home