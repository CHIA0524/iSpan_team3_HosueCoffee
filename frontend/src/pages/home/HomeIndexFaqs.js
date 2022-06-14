import React from 'react';
import { useState, useEffect } from 'react';

function HomeIndexFaqs(){
    const openSideNav = document.querySelector('.openSideNav');
    const navFirst = document.querySelector('.navFirst');
    const sideDark = document.querySelector('.sideDark');
    const closeSideNav = document.querySelector('.closeSideNav');
    
    const openMemberDetail = document.querySelector('.openMemberDetail');
    const memberDetail = document.querySelector('.memberDetail');

    sideDark.addEventListener('click', ()=>{
      navFirst.style.left = '-260px';
      sideDark.style.display = 'none';
      memberDetail.style.display = 'none';
    })
    closeSideNav.addEventListener('click', ()=>{
      navFirst.style.left = '-260px';
      sideDark.style.display = 'none';
      memberDetail.style.display = 'none';
    })

    openSideNav.addEventListener('click', ()=>{
      navFirst.style.left = '0px';
      sideDark.style.display = 'block';
    });
    openMemberDetail.addEventListener('click', ()=>{
      if(memberDetail.style.display=='flex'){
        memberDetail.style.display = 'none';
      }
      else if(memberDetail.style.display=='none'){
        memberDetail.style.display = 'flex';
        memberDetail.style.height = 'auto';
      }
    })

    return(
        <>
        <div className="FAQsWrap">
    <h2>FAQs</h2>

    <div>
      <h3>商品購買問題</h3>
      <div className="QandA">
        <p>Q: 如何查詢訂購紀錄？</p>
        <p>A: 請您至【會員資料】查詢訂購紀錄。</p>
      </div>
      <div className="QandA">
        <p>Q: 如何更改已送出訂單中的取餐門市？</p>
        <p>A: 若已成立訂單，仍顯示門市訂單接收中，請撥打門市電話，吿知門市人員以手動方式，為您更改取餐門市。若門市訂單準備中，將無法修改訂單。</p>
      </div>
      <div className="QandA">
        <p>Q: 商品的配送時間和方式？</p>
        <p>A: 商品將於完成付款後 7 個工作天內送達（不含週六、日及國定假日。部份預購、特別訂製商品除外），目前配送方式為郵局、宅配或貨運等配送方式。</p>
      </div>
    </div>

    <div>
      <h3>線上咖啡訂購問題</h3>
      <div>
        <p>Q: 訂單成立後是否可以更改訂單數量及商品？</p>
        <p>A: 為保障您購物資料的安全性，客服人員無任何權限異動會員的訂單資料，所以訂單成立後即無法更改數量及商品。</p>
      </div>
      <div>
        <p>Q: 如何更改已送出訂單中的取餐門市？</p>
        <p>A: 若已成立訂單，仍顯示門市訂單接收中，請撥打門市電話，吿知門市人員以手動方式，為您更改取餐門市。若門市訂單準備中，將無法修改訂單。</p>
      </div>
      <div>
        <p>Q: 如何才能知道我的訂單是否成立？</p>
        <p>A: 請您至【會員資料】查詢訂單，或透過同頁面右下方的線上諮詢服務查詢訂單事宜。</p>
      </div>
    </div>

    <div>
      <h3>會員常見問題</h3>
      <div>
        <p>Q: 忘記密碼怎麼辦？</p>
        <p>A: 請於登入時，輸入帳號或手機號碼後，選擇【忘記密碼】，待取得簡訊驗證碼後，填入數字並重新設定一組8到12字元、英數混合的密碼即可。請儘量避免使用生日、個人手機及連號數字，並留意定期更新密碼，以維護您的帳戶安全。</p>
      </div>
      <div>
        <p>Q: 想重設密碼 ，但收不到簡訊驗證碼該如何做？</p>
        <p>A: 建議您刪除一兩封簡訊，將wifi或行動網路4G、5G調整為另一種連線方式；您亦可將手機sim卡更換至其他行動裝置，開啟個人熱點，並使用原裝置連線後，再次嘗試索取驗證碼。</p>
      </div>
      <div>
        <p>Q: 如何修改密碼及個人資料？</p>
        <p>A: 請前往【會員資料】，在我的帳戶中選擇「基本資料」及「密碼管理」，即可自行更新您的手機號碼、電子郵件信箱、登入密碼及個人基本資料。提醒您，修改後請再次確認資料的正確性，以保障您的權益。</p>
      </div>

    </div>



  </div></>
    )
}

export default HomeIndexFaqs