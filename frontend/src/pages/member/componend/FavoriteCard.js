import { useState } from 'react';
function FavoriteCard(){
    
    const [total,settotal]=useState(1)
    

    return(
        <>
            <div className="card FavCard mb-4">
                    <div className="package">
                        <a href=""><img className="card-img-top" src={require('../img/包裝 2.png')} alt=""></img></a>
                    </div>
                    <div className="cardName d-flex justify-content-between">
                        <div>
                            <p>咖啡豆</p>
                        </div>
                        <div>
                            <a href=""><img src={require('../img/heart.png')} alt=""></img></a>
                        </div>
                    </div>
                    <p className="MFcardPrice">$499</p>
                    <div className="cardFoot">
                        <div className="addMNum" >
                            <div className="MNumL" onClick={()=>{if(total>1){
                                settotal(total-1);
                            }}}>-</div>
                            {/* <div className="MNumL" >-</div> */}
                            <div className="addMNumDV"><input className="addMNumV"  value={total} type="text" readonly onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input></div>
                            {/* <div className="MNumR" >+</div> */}
                            <div className="MNumR" onClick={()=>{
                                settotal(total+1);
                            }}>+</div>
                        </div>  
                        <button className="cardBuy">選購</button>
                    </div>
                </div>
               
        </>
    )
   
}
export default FavoriteCard;