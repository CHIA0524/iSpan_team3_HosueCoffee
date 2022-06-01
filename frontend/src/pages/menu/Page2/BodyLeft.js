import React from 'react';




const BodyLeft = () => (

    <div className="body1">
        <div className="total">
            <div className="people">
                <span>購買人資料</span>
                <div>
                    <span>姓名:</span><br/>
                    <input type="text" name="" id="" value=""  placeholder="name"/>
                    <p></p>
                </div>
                <div>
                    <span>手機:</span><br/>
                    <input type="text" name="" id="" value=""  placeholder="number"/>
                    <p></p>
                </div>
                <div>
                    <span>領取時間:</span><br/>
                    <input type="text" name="" id="" value=""  placeholder="time"/>
                    <p></p>
                </div>
            </div>  
            <div className="selectStore">
                <div className="hisstoryStoreName">
                    <span>上次訂餐門市</span>
                </div>
                <div className="hisstoryStore">
                    <div className="cardWrap">
                        <img src="../img/01.jpg" alt=""/>
                        <div className="itemText">
                            <p>長榮店</p>
                            <p>新北市 新店區中央路159號4F</p>
                            <p>02-412-8869</p>
                        </div>
                        <i className="fa-solid fa-circle-info"></i>
                    </div>
                </div>    
                <div>
                    <span>選擇門市</span>
                </div>
                <div className="Promo1">
                    <div className="Payment">
                        <p>選擇縣市</p>
                        <div className="sel sel--black-panther popo1">
                            <select name="select-profession" id="select-profession">
                                <option value="" disabled>選擇縣市</option>
                                <option value="hacker">測試</option>
                                <option value="gamer">測試</option>
                                <option value="developer">測試</option>
                                <option value="programmer">測試</option>
                                <option value="designer">測試</option>
                            </select>
                        </div>
                        <hr className="rule"/>
                    </div>
                </div>
                <div className="Promo1">
                    <div className="Payment">
                        <p>選擇地區</p>
                        <div className="sel sel--black-panther popo2">
                            <select name="select-profession" id="select-profession">
                                <option value="" disabled>選擇地區</option>
                                <option value="hacker">測試</option>
                                <option value="gamer">測試</option>
                                <option value="developer">測試</option>
                                <option value="programmer">測試</option>
                                <option value="designer">測試</option>
                            </select>
                        </div>
                        <hr className="rule"/>
                    </div>
                </div>
                <div className="Promo1">
                    <div className="Payment">
                        <p>選擇門市</p>
                        <div className="sel sel--black-panther">
                            <select name="select-profession" id="select-profession">
                                <option value="" disabled>選擇門市</option>
                                <option value="hacker">測試</option>
                                <option value="gamer">測試</option>
                                <option value="developer">測試</option>
                                <option value="programmer">測試</option>
                                <option value="designer">測試</option>
                            </select>
                        </div>
                        <hr className="rule"/>
                    </div>
                </div>
            </div>
            <div className="store1">
                <div className="cardWrap">
                    <img src="../img/01.jpg" alt=""/>
                    <div className="itemText">
                        <p>長榮店</p>
                        <p>新北市 新店區中央路159號4F</p>
                        <p>02-412-8869</p>
                    </div>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
            </div>    
        </div>
    </div> 






)


export default  BodyLeft