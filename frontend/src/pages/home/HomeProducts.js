import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import coffeebag01 from './image/coffeebag01.png';



function homeProducts(props) {
//    const {productScroll} = props
//     const [ scrollDivToffset, setscrollDivToffset ] = useState()

//     let getProduct = useLocation();

//     useEffect(()=>{
//         window.addEventListener('onClick', ()=>{
//             setscrollDivYoffset(Window.scrollDivToffset)
//         })
//     },[]);

const productsimg1=()=>{
    // document.querySelector('#scrollProduct1 ').style.position="absolute";
    // document.querySelector('#scrollDiv1').style.top="0px";
    document.querySelector('#scrollDiv1').scrollTo(100,0);
    
   

}
const productsimg2=()=>{
    document.querySelector('#scrollDiv1').scrollTo(100,361);
    
   

}
    

    return (
        <div className="product">
            <div className="allProduct">
                <h1>FLAGSHIP PRODUCTS</h1>
                <div className="scrollDiv" id='scrollDiv1'>
                    <div className="productscroll" id='scrollProduct1'>
                        <img className="scrollProduct1" src={coffeebag01} alt="" />
                        <div className="productdetail">
                            <h5>1.伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={coffeebag01} alt="" />
                        <div className="productdetail">
                            <h5>2.伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={coffeebag01} alt="" />
                        <div className="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={coffeebag01} alt="" />
                        <div className="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                    <div className="productscroll">
                        <img className="scrollProduct1" src={coffeebag01} alt="" />
                        <div className="productdetail">
                            <h5>伊莎米 精選招牌特調＄499</h5>
                            <h6>產地:肯亞</h6>
                            <p> 中南美洲咖啡的整體風味以平衡而著稱，咖啡風味也非常豐富。普遍使用濕法處理生豆也是中南美洲咖啡的特色之一，豆型相較於非洲咖啡大而更加均勻，好的加工過程也使得瑕疵率較其他產區也更低。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="productSel">

                    <div onClick={productsimg1} className="product1">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div onClick={productsimg2} className="product2">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div className="product3">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div className="product4">
                        <img src={coffeebag01} alt="" />
                    </div>
                    <div className="product5">
                        <img src={coffeebag01} alt="" />
                    </div>
                </div>
                <div className="productBTN">
                    <a href="">
                        <div className="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div className="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div className="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div className="selBTN">
                        </div>
                    </a>
                    <a href="">
                        <div className="selBTN">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default homeProducts