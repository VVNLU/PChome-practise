<template>
  <div class="middleBar">
    <div class="middleDown">
      <button>
        <a href="#">
          <img src="../assets/PIC/middleDown/47off.jpg" alt="" class="dyson" />
          <p class="title">莞婷寵媽推薦</p>
          <p class="desc">限時47折起</p>
        </a>
      </button>
      <button>
        <a href="#"
          ><img src="../assets/PIC/middleDown/esoncreditcard.jpg" alt="" />
          <p class="title">Pi 拍錢包</p>
          <p class="desc">綁玉山Pi 卡</p>
        </a>
      </button>
      <button>
        <a href="#"
          ><img src="../assets/PIC/middleDown/seasonchange.jpg" alt="" />
          <p class="title">換季有對策</p>
          <p class="desc">抗敏收納有一套</p>
        </a>
      </button>
    </div>
  </div>
</template>
<style scoped>
.middleBar {
  position: relative;
}
.middleDown {
  position: absolute;
  left: 230px;
  top: 30px;
}
img {
  border-radius: 10px;
  width: 250px;
  height: 100px;
}
button {
  border: none;
  margin: 5px;
}
a {
  text-decoration: none;
  color: white;
}
.title {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 0px;
}
.desc {
  position: absolute;
  font-size: 14px;
  top: 30px;
}
</style>
