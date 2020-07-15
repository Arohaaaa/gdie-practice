<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-wrapper">
        <div class="left-wrapper__logoBox">
          <img class="logoBox__logo" src="../assets/img/logo@2X.png" alt="省信LOGO" />
          <img class="logoBox__logoTop" src="../assets/img/R.png" />
        </div>
        <span class="left-wrapper__title">省信一体化平台</span>
      </div>
    </div>
    <div class="header-right">
      <div class="header-right-wrapper">
        <div class="right-wrapper__title">
          <span>统一待办</span>
        </div>
        <div class="right-wrapper__loginBox">
          <img class="loginBox__avatar" src="../assets/img/avatar9@2X.png" alt="头像" />
          <span class="loginBox__role">管理员</span>
          <span class="loginBox__btn">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.header {
  position: fixed;
  display: flex;
  background-color: #5077aa;
  height: 60px;
  width: 100%;
  z-index: 100000;
}
.header-left {
  position: relative;
  display: flex;
  width: 244px;
}
.header-left-wrapper {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.left-wrapper__logoBox {
  position: relative;
}
.logoBox__logo {
  width: 44px;
  height: 32px;
}
.logoBox__logoTop {
  position: absolute;
  top: -6px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.left-wrapper__title {
  margin-left: 12px;
  font-family: "MF LangQian";
  font-size: 22px;
  color: white;
}
.header-left::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 35px;
  background-color: #81a5c6;
}

.header-right {
  width: calc(100% - 244px);
}
.header-right-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 18px;
}
.right-wrapper__title {
  font-size: 20px;
  color: #fff;
}
.right-wrapper__loginBox {
  display: flex;
  align-items: center;
  color: #fff;
}
.loginBox__avatar {
  margin-right: 10px;
  width: 34px;
  height: 34px;
}
.loginBox__role {
  margin-right: 30px;
}
</style>
