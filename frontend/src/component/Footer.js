import { useLocation } from 'react-router-dom';
import React from 'react';
import './Footer.scss'

// icons
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";

function Footer (){
  let storeCSS ;
  let getURL = useLocation();
  if(getURL.pathname==='/store'){
    storeCSS = {display: 'none'}
  }
  
  return(
    <footer className="coffeeFooter" style={storeCSS}>
      <div className="d-flex">
        <div className="mx-5">
          PRODUCT
          <li><a href="/shop">coffee</a></li>
          {/* <li><a href="">cups</a></li> */}
          <li><a href="/shop/other">other</a></li>
        </div>
        <div className="mx-5">
          ABOUT US
          <li><a href="">news</a></li>
          <li><a href="/store">store</a></li>
          <li><a href="">FAQs</a></li>
        </div>
      </div>
      <div className="mx-5">
        <div className="d-flex align-items-center">
          <IoMailOutline size={20}/>
          <p>team3@house.coffee.com</p>
        </div>
        <div className="d-flex align-items-center">
          <IoCallOutline size={20}/>
          <p>(07)333-3333</p>
        </div>
        <div className="d-flex align-items-center">
          <BiCopyright size={20}/>
          <p>2022 . HOUSE COFFEE</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer