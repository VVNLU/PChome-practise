<template>
  <div class="leftbar">
    <div class="leftUp">
      <button class="btn">
        <a href="#">
          <p class="btnTitle">全場32折起</p>
          <p class="btnDesc">連假好禮雙重抽</p>
        </a>
      </button>
    </div>
    <div class="leftDown">
      <button class="btn">
        <a href="">
          <p class="btnTitle">Apple Watch</p>
          <p class="btnDesc">指定款$119900up</p>
        </a>
      </button>
    </div>
  </div>
</template>
<style scoped>
.btn {
  position: relative;
  width: 200px;
  height: 210px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  margin: 10px 20px;
  box-shadow: 0 5px #dddddd;
}

.leftUp > .btn {
  background: url(../assets/PIC/mother.jpg);
  background-size: 100%;
}
.leftDown > .btn {
  background: url(../assets/PIC/applewatch.jpg);
  background-size: 100%;
}

.btnImg {
  border-radius: 10px;
}

.btnTitle {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  left: 35%;
  top: 65%;
}
.btnDesc {
  position: absolute;
  font-size: 14px;
  left: 35%;
  top: 80%;
}
.btn > a {
  text-decoration: none;
  color: #000;
}
.btn:hover > a {
  color: #0090eb;
}
</style>
