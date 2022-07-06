import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { BrowserRouter as Router, Route, Link, Switch } 
from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import '../brandproduct.css';
import ShopKenya from '../ShopKenya';

function Aside(){

      
      

    return(
      <>
      {/* <!-- 手機板的select -->
        <div class="type">
            <select class="form-select form-select-sm typeDetail"  onChange={(e) => find(e)} 
            required>
                <option value="shop">全部</option>
                <option value="kenya">肯亞</option>
                <option value="ethiopia">衣索比亞</option>
                <option value="brazil">巴西</option>
                <option value="colombia">哥倫比亞</option>
                <option value="guatemala">瓜地馬拉</option>
                <option value="other">其他</option>
            </select>
    
        </div> */}
        <aside class="adminAside col-2">
                <ul class="asideContent">
                    <p class="maindir">商店</p>
                    <li>
                    <Link to="/shop">全部</Link>
                    </li>
                    <li>
                        <Link to="/shop/kenya">肯亞</Link>
                    </li>
                    <li>
                        <Link to="/shop/ethiopia">衣索比亞</Link>
                    </li>
                    <li>
                        <Link to="/shop/brazil">巴西</Link>
                    </li>
                    <li>
                        <Link to="/shop/colombia">哥倫比亞</Link>
                    </li>
                    <li>
                        <Link to="/shop/guatemala">瓜地馬拉</Link>
                    </li>
                    <li>
                        <Link to="/shop/other">其他</Link>
                    </li>

                </ul>

            </aside>
      </>
    );
  }

  
  export default Aside