import './card.css';



function CreditCard(){
    
 



return(
    <>   
     <div class=" container creditCard ">
        <div class="card ccard">
            <div class="col-3"></div>
            <div class=" cardFace cardFaceFront">
                <div class="logo">
                    <img src="./img/card好室咖啡 1.png" alt=""></img>
                    <img class="visa" src="./img/visa.png" alt=""></img>
                </div>
                <div class="cardNum">
                    <p>XXXX</p>
                    <p>XXXX</p>
                    <p>XXXX</p>
                    <p>XXXX</p>
                </div>
                <div class="expires">
                    <p>Expires</p>
                    <p class="big">XX/XX</p>
                </div>
                <div class="holder">
                    <p>Card Holder</p>
                    <p class="big">FULL NAME</p>
                </div>



            </div>


            <div class="cardFace cardFaceBack">
                <div class="bBlack">
                    <div class="box"></div>
                </div>
                <div class="cvc">
                    <div class="box">
                        <p>CVC</p>
                    </div>
                </div>
                <div class="sign">
                    <div class="box">
                    </div>
                </div>
                <div class="bLogo">
                    <img src="./img/visa.png" alt=""></img>
                </div>

            </div>
        </div>

        <div class="cardContent">
            <div class="box"></div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10 information ">
                    <label class="inputNumber">信用卡卡號</label>
                    <input type="text" class="form-control inputNumber" placeholder=""/>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10 ">
                    <label class="inputName">持卡人
                    </label>
                    <input type="text" class="form-control inputName" placeholder=""/>
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-5 ">
                    <label class=" inputDate">到期日
                    </label>
                    <input type="text" class="form-control inputDate" placeholder=""/>
                </div>
                <div class="col-1"></div>
                <div class="col-4 ">
                    <label class="inputCvc">CVC
                    </label>
                    <input type="text" class="form-control inputCvc" placeholder=""/>
                </div>
            </div>
            <div class="row">
                <div class="col-1 "></div>
                <div class="col-10">
                    <br/>
                    <div class="d-grid mb-3">
                        <button class="btn btn-primary" type="button">提交</button>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>


        
    </>
)
}
export default CreditCard;