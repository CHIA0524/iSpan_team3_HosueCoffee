import {Link} from "react-router-dom";
import Dropdown from "../component/Dropdown ";



    



const Pay = (props) => {
    const {totalprice} = props


    const updateprice = () => { 

        const updateprice = {
                totalprice:totalprice
        }
        // let updateprices = localStorage.getItem("updateprices") ? JSON.parse(localStorage.getItem("updateprices")) : []
        localStorage.setItem("updateprices", JSON.stringify(updateprice))
    }
        return (
            <div className="list">
                <div className="Promo">
                    <div className="Payment">
                        <Dropdown/>
                    </div>
                </div>
                <div className="subtotal">
                    <div className="d-flex col-3">
                        <p>商品小計:</p>
                    </div>
                    <div className="totalPrice">
                        <div className="d-flex justify-content-between">
                            <h6>優惠碼折扣</h6>
                            <h6>-25</h6>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            {/* // <h6>紅利折扣</h6>
                            // <h6>-25</h6> */}
                        </div>
                        <h4 style={{color: 'red'}}>{totalprice}</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-end">
                        <Link to='/onlinemenu' className="btn PaymentLast">
                            繼續購物
                        </Link>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Link to="/OnlineCheckPage2" onClick={updateprice}>
                            <div className="btn PaymentLast">
                                結帳
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
}

export default Pay