<template>
  <head> </head>
  <div class="searchBar">
    <img src="../assets/PIC/logo.jpg" class="logo" />
    <div class="buttons">
      <input type="text" placeholder="輸入你想找的商品" class="searchInput" />
      <input type="submit" class="submitBtn" value="" />
      <i class="fa-solid fa-magnifying-glass fa-sm" style="color: #ffffff"> </i>
    </div>
  </div>
</template>
<style scoped>
* {
  display: flex;
  background: #eb1716;
}
.logo {
  max-width: 15%;
}

.searchInput {
  width: 600px;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 5px 3px #d61919;
}
.submitBtn {
  position: absolute;
  background-color: #d61919;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  outline: none;
  right: 10px;
  top: 26px;
}
i:hover + .submitBtn,
.submitBtn:hover {
  box-shadow: none;
  border: none;
  background-color: #f42727;
}
.buttons {
  position: relative;
}
i.fa-solid {
  position: absolute;
  right: 17px;
  top: 40px;
}
</style>
