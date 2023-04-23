<template>
  <nav class="navbar">
    <div class="leftNavbar">
      <ul>
        <li><a href="">比比昂日本購物</a></li>
        <li><a href="">泰國購物</a></li>
        <li>
          <div class="navItem">
            <span>綜合服務</span>
            <!-- <ul>
              網路服務
              <li>PChome 商店街</li>
              <li>露天拍賣</li>
              <li>MiTCH 日系服裝</li>
              <li>全球購物</li>
              <li>媽咪愛</li>
            </ul>
            <ul>
              金融保險
              <li>Pi 拍錢包</li>
              <li>易安網</li>
            </ul>
            <ul>
              旅遊娛樂
              <li>PChome 旅遊</li>
            </ul> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="rightNavbar">
      <ul>
        <li><router-link to="">最近看過</router-link></li>
        <li><router-link to="">購物車</router-link></li>
        <li><router-link to="">我的訂單</router-link></li>
        <li>
          <div class="customer">
            顧客中心
            <!-- <ul>
                      <li>追蹤清單</li>
                      <li>故障通報</li>
                      <li>退貨</li>
                      <li>會員設定</li>
                    </ul> -->
          </div>
        </li>
        <li>
          <div class="download">
            下載APP
            <ul>
              <!-- <li>QRCode</li>
                      <li>享受APP專屬優惠</li> -->
            </ul>
          </div>
        </li>
        <li><router-link to="">註冊</router-link></li>
        <li><router-link to="">登入</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  color: white;
  background-color: #9e0a0a;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  margin: 0;
  padding: 8px 10px;
  overflow: hidden;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* li a:hover {
} */
</style>
