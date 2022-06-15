module.exports = class ModifyPayment {

  //銜接歐付寶的Return_URL回來的資料，並確定付款是否成功，若成功則進行改變用戶資料動作。
  paymentResult(req, res) {
      var rtnCode = req.body.RtnCode;
      var simulatePaid = req.body.SimulatePaid;
      var merchantID = req.body.MerchantID;
      var merchantTradeNo = req.body.MerchantTradeNo;
      var storeID = req.body.StoreID;
      var rtnMsg = req.body.RtnMsg;
      // var tradeNo = req.body.TradeNo;
      var tradeAmt = req.body.TradeAmt;
      // var payAmt = req.body.PayAmt;
      var paymentDate = req.body.PaymentDate;
      var paymentType = req.body.PaymentType;
      // var paymentTypeChargeFee = req.body.PaymentTypeChargeFee;

      let paymentInfo = {
          merchantID: merchantID,
          merchantTradeNo: merchantTradeNo,
          storeID: storeID,
          rtnMsg: rtnMsg,
          paymentDate: paymentDate,
          paymentType: paymentType,
          tradeAmt: tradeAmt
      }

      //(添加simulatePaid模擬付款的判斷 1為模擬付款 0 為正式付款)
      //測試環境
      if (rtnCode === "1" && simulatePaid === "1") {
          // 這部分可與資料庫做互動
          res.write("1|OK");
          res.end();
      }
      //正式環境
      //  else if (rtnCode === "1" && simulatePaid === "0") {
      // 這部分可與資料庫做互動
      // } 
      else {
          res.write("0|err");
          res.end();
      }
  }
  //銜接歐付寶的OrderResultURL
  paymentActionResult(req, res) {

      var merchantID = req.body.MerchantID; //會員編號
      var merchantTradeNo = req.body.MerchantTradeNo; //交易編號
      var storeID = req.body.StoreID; //商店編號
      var rtnMsg = req.body.RtnMsg; //交易訊息
      var paymentDate = req.body.PaymentDate; //付款時間
      var paymentType = req.body.PaymentType; //付款方式
      var tradeAmt = req.body.TradeAmt; //交易金額

      let result = {
          member: {
              merchantID: merchantID,
              merchantTradeNo: merchantTradeNo,
              storeID: storeID,
              rtnMsg: rtnMsg,
              paymentDate: paymentDate,
              paymentType: paymentType,
              tradeAmt: tradeAmt
          }
      }
      // console.log("result: " + JSON.stringify(result));
      res.render(
          'payment_result', {
              result: result
          }
      )
  }
}