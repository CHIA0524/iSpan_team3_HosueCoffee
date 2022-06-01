import React from 'react';





const Dropdown = () => (



    <div className="sel sel--black-panther">
        <select name="select-profession" id="select-profession">
            <option value="" disabled>付款方式</option>
            <option value="hacker">刷卡</option>
            <option value="gamer">轉帳</option>
            <option value="developer">linepay</option>
            <option value="programmer">測試</option>
            <option value="designer">測試</option>
        </select>
    </div>


)

export default Dropdown