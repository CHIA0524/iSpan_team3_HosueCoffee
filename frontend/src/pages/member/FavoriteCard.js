function FavoriteCard(){
    
    
    // const sub = ()=>{
    //     const addNumV=document.querySelector('.addNumV');
    //     console.log(addNumV)
    //         if(Number(addNumV.value)>1){
    //             addNumV.value=Number(addNumV.value)-1;
    //         }
    // }
        
    // const add = ()=>{
    //     const addNumV=document.querySelector('.addNumV');        
    //     addNumV.value=Number(addNumV.value)+1;
    // }
    return(
        <>
            <div className="card mb-4">
                    <div className="package">
                        <a href=""><img className="card-img-top" src={require('./img/包裝 2.png')} alt=""></img></a>
                    </div>
                    <div className="cardName d-flex justify-content-between">
                        <div>
                            <p>咖啡豆</p>
                        </div>
                        <div>
                            <a href=""><img src={require('./img/heart.png')} alt=""></img></a>
                        </div>
                    </div>
                    <p className="cardPrice">$499</p>
                    <div className="cardFoot">
                        <div className="addNum" >
                            {/* <div className="NumL" onClick={sub}>-</div> */}
                            <div className="NumL" >-</div>
                            <div className="addNumDV"><input className="addNumV"  value="1" type="text" readonly onkeypress='return event.charCode >= 48 && event.charCode <= 57'></input></div>
                            <div className="NumR" >+</div>
                            {/* <div className="NumR" onClick={add}>+</div> */}
                        </div>  
                        <button className="cardBuy">選購</button>
                    </div>
                </div>
               
        </>
    )
   
}
export default FavoriteCard;