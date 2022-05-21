import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './brandproduct.css';

function Aside(){


    return(
      <>
      {/* <!-- 手機板的select --> */}
        <div class="type">
            <select class="form-select form-select-sm typeDetail">
                <option selected>全部</option>
                <option value="1">肯亞</option>
                <option value="2">衣索比亞</option>
                <option value="3">巴西</option>
                <option value="4">哥倫比亞</option>
                <option value="5">瓜地馬拉</option>
                <option value="6">其他</option>
            </select>
    
        </div>
        <aside class="adminAside col-2">
                <ul class="asideContent">
                    <p class="maindir">商店</p>
                    <li>
                        <a href="">全部</a>
                    </li>
                    <li>
                        <a href="">肯亞</a>
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