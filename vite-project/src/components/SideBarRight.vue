<template>
  <div class="rightBar">
    <div>
      <p class="freeShopping">低門檻！<span>$490</span>免運</p>
    </div>
    <div class="barContent">
      <p>晚安您好！</p>
      <button class="loginBtn">登入</button>
      <div>會員獨享</div>
      <div>
        <div class="contents">
          <i class="fas fa-shipping-fast fa-lg" style="color: #eb1716"></i
          >24小時快速到貨
        </div>
        <div class="contents">
          <i class="fas fa-calendar-check fa-lg" style="color: #eb1716"></i
          >鑑賞期退貨保證
        </div>
        <div class="contents">
          <i class="fas fa-credit-card fa-lg" style="color: #eb1716"></i
          >多元付款方式
        </div>
        <div class="contents">
          <i class="fas fa-genderless fa-lg" style="color: #eb1716"></i
          >銀行分期零利率
        </div>
      </div>
      <hr />
      <img src="../assets/PIC/right/prize.jpg" alt="" class="prize" />
    </div>
  </div>
</template>
<style scoped>
.rightBar {
  position: relative;
}
.freeShopping {
  position: absolute;
  display: flex;
  align-items: center;
  width: 180px;
  height: 30px;
  padding: 5px;
  background: linear-gradient(-70deg, transparent 14px, #0090eb 0) right;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-family: "Bahnschrift Light", "Arial Narrow", Arial, sans-serif;
  top: -420px;
  right: 20px;
  z-index: 2;
}
.freeShopping span {
  font-weight: bold;
  font-size: 26px;
  padding: 5px;
}
.barContent {
  position: absolute;
  width: 200px;
  height: 500px;
  background-color: #fff;
  border: #eb1716 solid 1px;
  border-radius: 10px;
  z-index: 1;
  top: -350px;
  right: 10px;
}
.loginBtn {
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 50px;
  color: #0090eb;
  background-color: #f2f2f2;
  font-weight: bold;
  font-size: 14px;
}
hr {
  border-color: #e5e5e538;
}
.prize {
  position: absolute;
  top: 340px;
  width: 100%;
}
.contents {
  margin-top: 24px;
}
i {
  width: 30px;
  margin: 10px;
  font-size: x-large;
  text-align: center;
}
</style>
