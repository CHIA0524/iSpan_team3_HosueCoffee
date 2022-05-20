import './memberAside.css'
import './memberOrder.css'
function OrderCard(){
    return(
        <>
             <div class="row d-flex align-items-center">
                                <div class="col-2 col-3None">
                                    <img class="wnimg"  src={require('./img/包裝 9.png')} alt=""></img>

                                </div>
                                <div class="col-4 col-3None">
                                    <p class="proname">伊莎米 精選招牌特調(半磅)</p>
                                </div>
                                <div class="col-1 col-3None"></div>
                                <div class="col-2 col-3None">
                                    <p>數量：2</p>
                                </div>
                                <div class="col-1 col-3None"></div>
    
                                <div class="col-1 col-3None">
                                    <p>$499</p>
                                </div>

                                <div class="col-4 col-wn">
                                    <img src={require('./img/包裝 9.png')} alt=""></img>
                                </div> 
                                <div class="col-8 col-wn wnmain">
                                    <p class="odname_m">伊莎米 精選招牌特調(半磅)</p>
                                    <p>數量：2</p>
                                    <div class="row">
                                        <p class="wn_money col-7">單價:499</p>
                                        <p class="wn_TTM col-5">小計:998</p>
                                    </div>
                                </div>

                            </div>
                            <hr></hr>

        </>
    )
}
export default OrderCard;