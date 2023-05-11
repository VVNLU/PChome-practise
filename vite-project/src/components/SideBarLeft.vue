<template>
  <div class="leftbar">
    <div class="leftUp">
      <a href="#">
        <img
          src="../assets/PIC/left/mothersday.png"
          alt="mothetsday"
          class="maxImg"
        />
        <button class="btn">
          <img src="../assets/PIC/left/flower.jpg" alt="" class="minImg" />
          <p class="btnTitle">全場32折起</p>
          <p class="btnDesc">連假好禮雙重抽</p>
        </button>
      </a>
    </div>
    <div class="leftDown">
      <a href="#">
        <img
          src="../assets/PIC/left/mouse.jpg"
          alt="apple watch"
          class="maxImg"
        />
        <button class="btn">
          <img src="../assets/PIC/left/logitech.jpg" alt="" class="minImg" />
          <p class="btnTitle">Apple Watch</p>
          <p class="btnDesc">指定款$119900up</p>
        </button>
      </a>
    </div>
  </div>
</template>
<style scoped>
.leftbar {
  position: relative;
}
.leftUp {
  position: absolute;
  top: 20px;
}
.leftDown {
  position: absolute;
  top: 240px;
}
.btn {
  position: absolute;
  background-color: #fff;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px #dddddd;
  top: 136px;
  left: 25px;
  cursor: pointer;
}
.maxImg {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  left: 25px;
}
.minImg {
  position: absolute;
  width: 50px;
  border: 1px #e5e5e5 solid;
  border-radius: 10px;
  left: 5px;
  top: 5px;
}
.btnTitle {
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  left: 65px;
  top: -5px;
}
.btnDesc {
  position: absolute;
  top: 20px;
  left: 65px;
}
.btn:hover > p {
  color: #0090eb;
}
</style>
