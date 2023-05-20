<template>
  <div class="loginPage">
    <div class="navbar">
      <div class="barLeft">
        <router-link to="/">
          <img src="../assets/PIC/login/logo.png" alt="PChome" />
        </router-link>
      </div>
      <div class="barRight">
        <router-link to="/"><p>回PChome 24h購物首頁</p></router-link>
      </div>
    </div>
    <div class="loginContent">
      <p class="welcome">歡迎登入</p>
      <p>
        {{
          isLogin ? "沒有PChome24購物帳號？" : "已經擁有 PChome 24h購物帳號嗎？"
        }}
      </p>
      <span @click="isLogin = !isLogin" class="register">
        {{ isLogin ? "立即註冊" : "立即登入" }}
      </span>
      <input
        type="mail"
        placeholder="請輸入手機號碼 或 Email"
        class="accountNum"
      />
      <div v-if="!isLogin">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="請輸入密碼（6~16為英數底線混合）"
          class="password"
        /><i
          @click="togglePassword"
          :class="
            showPassword
              ? 'fa-solid fa-eye fa-lg'
              : 'fa-solid fa-eye-slash fa-lg'
          "
          style="color: #c7c7c7"
        ></i>
      </div>
      <div v-if="!isLogin">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="確認密碼"
          class="confirmPassword"
        /><i
          @click="togglePassword"
          :class="
            showPassword
              ? 'fa-solid fa-eye fa-lg'
              : 'fa-solid fa-eye-slash fa-lg'
          "
          style="color: #c7c7c7"
        ></i>
      </div>
      <label class="rememberAccNum">
        <input v-if="isLogin" type="checkbox" id="remember" /><span
          v-if="isLogin"
          >記住帳號</span
        >
      </label>
      <router-link to="" class="forgetPassword" v-if="isLogin"
        >忘記密碼</router-link
      >
      <button class="submitBtn">{{ isLogin ? "登入" : "註冊" }}</button>
      <p>
        {{ isLogin ? "登入帳號" : "點擊註冊" }}
        ，即表示您以閱讀並同意PChome之<span>會員條款與客戶隱私條</span>
      </p>
      <div class="quickLogin">
        <div class="loginQuick">使用以下帳號快速登入</div>
      </div>
      <div class="buttonContainer">
        <div class="facebook">
          <button class="btn">
            <a href="https://facebook.com/"> </a>
          </button>
          <p>Facebook</p>
        </div>
        <div class="google">
          <button class="btn">
            <a href="https://google.com/"> </a>
          </button>
          <p>Google</p>
        </div>
        <div class="apple">
          <button class="btn">
            <a href="https://apple.com/"> </a>
          </button>
          <p>Apple</p>
        </div>
      </div>
      <span>使用其他PChome帳號登入</span>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { useRoute } from "vue-router";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const router = useRoute();
const isLogin = ref(true);

const password = ref("");
const showPassword = ref(false);

const togglePassword = function () {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.loginPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Bahnschrift Light", "Arial Narrow", Arial, sans-serif;
  background-color: #f2f2f2;
}
.navbar {
  height: 60px;
  background-color: #fff;
}
.barRight {
  position: absolute;
  right: 20px;
  top: 15px;
}
.barRight p {
  font-size: 8px;
  color: #999999;
}
.barLeft img {
  position: absolute;
  max-width: 11%;
  top: 7px;
  left: 10px;
}
.loginContent {
  display: grid;
  justify-items: center;
  height: 600px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
}
.welcome {
  font-size: 22px;
  font-weight: bold;
}
.register {
  color: #0090eb;
  font-weight: bold;
  cursor: pointer;
}
.register:hover {
  color: #17abee;
  font-weight: bold;
}
.accountNum,
.password,
.confirmPassword {
  height: 38px;
  width: 350px;
  border-radius: 10px;
  border: 1px #e5e5e5 solid;
  font-size: 16px;
  margin: 10px;
  text-indent: 10px;
}
.accountNum::-moz-placeholder {
  text-align: centern;
}
input[type="checkbox"] {
  height: 20px;
  width: 20px;
}
/* .memoryAccNum{
  display: flex;
  align-content: left;
} */
.forgetPassword {
  /* display: flex;
  align-content: right; */
  color: #0090eb;
  text-decoration: none;
}
.submitBtn {
  height: 38px;
  width: 350px;
  border-radius: 10px;
  background-color: #ea1717;
  color: #fff;
  border: none;
  font-size: 16px;
}
.submitBtn:hover {
  cursor: pointer;
  background-color: #f42727;
}
.btn {
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px #e5e5e5 solid;
}
.buttonContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: bold;
}
.buttonContainer button:hover {
  border: 1px #0090eb solid;
}
.facebook button {
  background: url("../assets/PIC/login/facebook.png") center/60% no-repeat;
}
.google button {
  background: url("../assets/PIC/login/google.png") center/75% no-repeat;
}
.apple button {
  background: url("../assets/PIC/login//Apple.png") center/50% no-repeat;
}
</style>
