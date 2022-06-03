import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../brandproduct.css';
import ShopKenya from '../ShopKenya';

function Aside(){
    const find = (event) => {
        event.preventDefault();
        if (event.target.value === "kenya") {
            window.location.replace('/shop/kenya')
            document.querySelector('.k').textContent='123'}
             else if (event.target.value === "shop") {
             window.location.replace('/shop')

       }
      };
      
      

    return(
      <>
      {/* <!-- 手機板的select --> */}
        <div class="type">
            <select class="form-select form-select-sm typeDetail"  onChange={(e) => find(e)} defaultValue="Select" required>
                <option value="shop">全部</option>
                <option value="kenya" className="k">肯亞</option>
                <option value="ethiopia">衣索比亞</option>
                <option value="brazil">巴西</option>
                <option value="colombia">哥倫比亞</option>
                <option value="guatemala">瓜地馬拉</option>
                <option value="other">其他</option>
            </select>
    
        </div>
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
                        <a href="">衣索比亞</a>
                    </li>
                    <li>
                        <a href="">巴西</a>
                    </li>
                    <li>
                        <a href="">哥倫比亞</a>
                    </li>
                    <li>
                        <a href="">瓜地馬拉</a>
                    </li>
                    <li>
                        <a href="">其他</a>
                    </li>

                </ul>

            </aside>
      </>
    );
  }

  
  export default Aside