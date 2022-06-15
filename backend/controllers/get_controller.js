module.exports = class GetPayment {
  payAction(req,res,next){
    let base_param = {
      MerchantTradeNo: payUid(), //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate: onTimeValue(), //ex: 2017/02/13 15:45:30
      TotalAmount: '100',
      TradeDesc: '測試交易描述',
      ItemName: 'HouseCoffe網路購物',
      ReturnURL: 'http://localhost:3000',
      // ChooseSubPayment: '',
      // OrderResultURL: 'http://192.168.0.1/payment_result',
      // NeedExtraPaidInfo: '1',
      // ClientBackURL: 'https://www.google.com',
      // ItemURL: 'http://item.test.tw',
      // Remark: '交易備註',
      // HoldTradeAMT: '1',
      // StoreID: '',
      // CustomField1: '',
      // CustomField2: '',
      // CustomField3: '',
      // CustomField4: ''
    };
    let invoice = {};
    let parameters = {};
    const ecpay_payment = require('../node_modules/ECPAY_Payment_node_js/lib/ecpay_payment')
    const options = require('../node_modules/ECPAY_Payment_node_js/conf/config-example'),
    create = new ecpay_payment(options);
    let htm = create.payment_client.aio_check_out_credit_onetime(parameters = base_param);
    console.log(htm)
    res.send(htm);
  }
}

const payUid = function () {
  return randomValue(10, 99) + "1234567890234567" + randomValue(10, 99);
}

// 隨機訂單ID
const randomValue = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//example: 2017/08/09 20:34:02
const onTimeValue = function () {
  var date = new Date();
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var hh = date.getHours();
  var mi = date.getMinutes();
  var ss = date.getSeconds();

  router.route('/OnlineCheckPage2')
.get(async (req,res,next)=>{
    req.send(datas);
    console.log(datas);
})

  return [date.getFullYear(), "/" +
      (mm > 9 ? '' : '0') + mm, "/" +
      (dd > 9 ? '' : '0') + dd, " " +
      (hh > 9 ? '' : '0') + hh, ":" +
      (mi > 9 ? '' : '0') + mi, ":" +
      (ss > 9 ? '' : '0') + ss
  ].join('');
};