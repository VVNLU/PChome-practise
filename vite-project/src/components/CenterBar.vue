<template>
  <div class="centerBar">
    <div class="centerUp"></div>
    <div class="centerDown">
      <button class="dyson">
        <a href="#">
          <p class="btnTitle">風扇選物輯</p>
          <p class="btnDesc">最高回饋20%</p>
        </a>
      </button>
      <button class="twelvePercentOff">
        <a href="#">
          <p class="btnTitle">百大品牌</p>
          <p class="btnDesc">最高回饋</p>
        </a>
      </button>
      <button class="seasonChange">
        <a href="#">
          <p class="btnTitle">換季有對策</p>
          <p class="btnDesc">抗敏收納有一套</p>
        </a>
      </button>
    </div>
  </div>
</template>
<style scoped>
.centerDown > button {
  position: relative;
  margin: 10px;
  width: 250px;
  height: 90px;
  border: none;
  border-radius: 10px;
  background-size: 100%;
  cursor: pointer;
}
.dyson {
  background: url(../assets/PIC/dyson.jpg) no-repeat;
}
.twelvePercentOff {
  background: url(../assets/PIC/12off.jpg) no-repeat;
}
.seasonChange {
  background: url(../assets/PIC/seasonchange.jpg) no-repeat;
}
.centerDown a {
  text-decoration: none;
  color: white;
}
.btnTitle {
  position: absolute;
  top: -10px;
  left: 15px;
  font-size: 18px;
  font-weight: bold;
}
.btnDesc {
  position: absolute;
  top: 20px;
  left: 15px;
  font-size: 14px;
}
</style>
