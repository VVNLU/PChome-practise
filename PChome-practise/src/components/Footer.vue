<template>
  <div class="footer">
    <div>
      <router-link to="/" class="backHome">PChome 24購物</router-link>
      <span class="dash">-</span>
      <span>網路家庭國際資訊股份有限公司&emsp;</span>
      <span>版權所有．轉載必究&emsp;</span>
      <a
        href="https://ecvip.pchome.com.tw/web/pages/contactinfo.htm"
        class="contactUs"
        >聯絡我們</a
      >&emsp;<a
        href="https://ecvip.pchome.com.tw/web/pages/privacy.htm"
        class="statement"
        >隱私權聲明</a
      >&emsp;<a
        href="https://ecssl.pchome.com.tw/sys/cflowex/index/staticPage/CLAUSE?_gl=1*yll75q*_ga*NjIxOTcwMzQyLjE2ODA5Mzc0OTA.*_ga_9CE1X6J1FG*MTY4NDA1NjQ3OC41Ni4xLjE2ODQwNTcwMTUuMjYuMC4w*_fplc*S2NJRGczQUtjZERHblRFUjVkVUJicGxmc0paWmFrWUNYNndVJTJCODFFa2wyOTdweGU2cEZyalRKc0d5eEM4UkpURE01bDJCMkJZTCUyRmRtMyUyQjRrSGViTXNWOWVWTW1NbTdyTzdNNFozWmh6Y2gzTkszQTYlMkZ3MU1zNzdvUkpmVmclM0QlM0Q."
        class="termsOfService"
        >服務條款</a
      >
    </div>
    <div>
      106&emsp;台北市大安區敦化南路二段105號15樓&emsp;｜統一編號：16606102
    </div>
    <div class="trademarks">
      PChome and PChome Online are trademarks of PChome Online Inc.
    </div>
    <div>
      本網站產品已投保富邦產物產品責任險$250,000,000元。(保險證號：0525字第22AML003989號)
    </div>
    <div>
      本網站採用&nbsp;reCAPTCHA&nbsp;保護機制&emsp;<a
        href="https://policies.google.com/privacy"
        class="privacy"
        >隱私權</a
      >&emsp;<a href="https://policies.google.com/terms" class="terms">條款</a>
    </div>
  </div>
</template>
<style scoped>
.footer {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  display: grid;
  justify-items: center;
  background-color: white;
  height: 127px;
  width: 100%;
  font-size: 14px;
  font-family: "Bahnschrift Light", "Arial Narrow", Arial, sans-serif;
  color: #777777;
}
.backHome {
  color: #000;
}
.dash {
  margin-left: 5px;
  margin-right: 10px;
}
.trademarks {
  color: #000;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.contactUs,
.termsOfService,
.privacy,
.terms {
  color: #000;
}
.statement {
  color: #0066d6;
}
</style>
