<template>
  <nav>
    <div class="navbar">
      <ul>
        <li class="JPshop"><a href="">比比昂日本購物</a></li>
        <li class="THshop"><a href="">泰國購物</a></li>
        <li class="serve">
          綜合服務
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
        </li>
      </ul>
    </div>
    <div class="navItems">
      <ul>
        <li><router-link to="">最近看過</router-link></li>
        <li><router-link to="">購物車</router-link></li>
        <li><router-link to="">我的訂單</router-link></li>
        <li class="customer">
          顧客中心
          <!-- <ul>
                <li>追蹤清單</li>
                <li>故障通報</li>
                <li>退貨</li>
                <li>會員設定</li>
              </ul> -->
        </li>
        <li class="download">
          下載APP
          <ul>
            <!-- <li>QRCode</li>
              <li>享受APP專屬優惠</li> -->
          </ul>
        </li>
        <li><router-link to="">註冊｜登入 </router-link></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
nav {
  display: grid;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #aa0000;
  color: white;
}

/* .navbar {
} */

.navItems {
  grid-column: 3/3;
  margin: 0 0 0 auto;
}

li {
  overflow: hidden;
  display: inline-block;
}

li a {
  color: white;
  text-decoration: none;
}

li a:hover {
  color: #e6b3b3;
}

.navbar li {
  margin-right: 30px;
}

.navItems li {
  margin-right: 15px;
}
</style>
