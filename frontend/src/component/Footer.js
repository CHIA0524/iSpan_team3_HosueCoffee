import { Link, useLocation } from 'react-router-dom';
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
          <li><Link to={"/onlinemenu"}>DRINK</Link></li>
          <li><Link to={"/shop"}>Coffee</Link></li>
          <li><Link to={"/shop/other"}>Other</Link></li>
        </div>
        <div className="mx-5">
          ABOUT US
          <li><Link to={"/FAQ"}>FAQs</Link></li>
          <li><Link to={"/store"}>STORE</Link></li>
          <li><a  className='tofb'
          // open="https://www.facebook.com/%E5%A5%BD%E5%AE%A4%E5%92%96%E5%95%A1-109299988478150/"
          onClick={()=>{
            window.open("https://www.facebook.com/%E5%A5%BD%E5%AE%A4%E5%92%96%E5%95%A1-109299988478150/")
          }}
          >FACEBOOK</a></li>
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