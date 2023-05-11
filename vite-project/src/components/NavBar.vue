<template>
  <nav>
    <div class="navbar">
      <span class="shop">
        <a href="">比比昂日本購物</a>
        <a href="">泰國購物</a>
      </span>
      <div class="drop">
        <button class="dropBtn">綜合服務</button>
        <div class="dropdown-content">
          <span>網路服務</span>
          <ul>
            <li><a href="#">PChome 商店街</a></li>
            <li><a href="#">露天拍賣</a></li>
            <li><a href="#">MiTCH 日系服裝</a></li>
            <li><a href="#">全球購物</a></li>
            <li><a href="#">媽咪愛</a></li>
          </ul>
          <span>金融保險</span>
          <ul>
            <li><a href="#">Pi 拍錢包</a></li>
            <li><a href="#">易安網</a></li>
          </ul>
          <span>旅遊娛樂</span>
          <ul>
            <li><a href="#">PChome 旅遊</a></li>
          </ul>
        </div>
      </div>
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
  font-family: 微軟正黑體, Arial, Helvetica, sans-serif;
  background-color: #aa0000;
  color: white;
}

.navItems {
  grid-column: 3/3;
  margin: 0 0 0 auto;
}
.drop {
  position: relative;
  display: inline-block;
}
.dropBtn {
  border: none;
  background-color: #7b0808;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
}
.dropdown-content {
  display: none;
  position: absolute;
}

.dropdown-content a {
  display: block;
}
.drop:hover .dropBtn {
  color: #a70909;
  background-color: #fff;
}
.drop:hover .dropdown-content {
  display: block;
  position: absolute;
}

li {
  overflow: hidden;
  display: inline-block;
}

li a {
  color: white;
  text-decoration: none;
}
.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 30px;
}
.shop a:hover {
  color: #e6b3b3;
}

.navItems li {
  margin-right: 15px;
}
</style>
