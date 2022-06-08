import { Checkbox } from "@mui/material";
import { useState } from "react";
import './test.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
function Test(){

  const handleSubmit = async () => {
    let details = {
    };
    let response = await fetch("https://team3-housecoffee-backend.herokuapp.com/payment/paymentaction");
    let result = await response.text();
    document.body.innerHTML = result;
    document.getElementById("_form_aiochk").submit();
  };
  return(
    <button onClick={handleSubmit}>結帳</button>
  )
}
export default Test