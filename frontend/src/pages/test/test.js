import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import './test.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';


function Test(){
  const randomValue = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  let uid = randomValue(10, 99) + "1234567890234567" + randomValue(10, 99);
  const handleSubmit = async () => {
    let response = await fetch(`https://team3-housecoffee-backend.herokuapp.com/payment/paymentaction?uid=${uid}&totalPrice=333`);
    let result = await response.text();
    document.body.innerHTML = result;
    document.getElementById("_form_aiochk").submit();
  };
  return(
    <button onClick={handleSubmit}>結帳</button>
  )
}
export default Test