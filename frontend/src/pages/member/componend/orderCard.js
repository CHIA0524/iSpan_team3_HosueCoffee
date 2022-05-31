import '../memberAside.css'
import '../memberOrder.css'
function OrderCard(){
    return(
        <>
             <div className="row d-flex align-items-center">
                                <div className="col-2 col-3None">
                                    <img className="wnimg"  src={require('../img/包裝 9.png')} alt=""></img>

                                </div>
                                <div className="col-4 col-3None">
                                    <p className="proname">伊莎米 精選招牌特調(半磅)</p>
                                </div>
                                <div className="col-1 col-3None"></div>
                                <div className="col-2 col-3None">
                                    <p>數量：2</p>
                                </div>
                                <div className="col-1 col-3None"></div>
    
                                <div className="col-1 col-3None">
                                    <p>$499</p>
                                </div>

                                <div className="col-4 col-wn">
                                    <img src={require('../img/包裝 9.png')} alt=""></img>
                                </div> 
                                <div className="col-8 col-wn wnmain">
                                    <p className="odname_m">伊莎米 精選招牌特調(半磅)</p>
                                    <p>數量：2</p>
                                    <div className="row">
                                        <p className="wn_money col-7">單價:499</p>
                                        <p className="wn_TTM col-5">小計:998</p>
                                    </div>
                                </div>

                            </div>
                            <hr></hr>

        </>
    )
}
export default OrderCard;