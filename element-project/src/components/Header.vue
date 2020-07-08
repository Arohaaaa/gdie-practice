<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_wrapper">
        <div class="header_left_logoBox">
          <img class="logo" src="../assets/img/logo@2X.png" alt="省信LOGO" />
          <img class="logo_top" src="../assets/img/R.png" />
        </div>
        <span class="title">省信一体化平台</span>
      </div>
    </div>
    <div class="header_right">
      <div class="header_right_wrapper">
        <div class="title_box">
          <span>统一待办</span>
        </div>
        <div class="login_box">
          <img class="avatar" src="../assets/img/avatar9@2X.png" alt="头像" />
          <span class="role">管理员</span>
          <span class="login_btn">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scope>
.header {
  display: flex;
  background-color: #5077aa;
  height: 60px;
}
.header_left {
  position: relative;
  display: flex;
}
.header_left .header_left_wrapper {
  display: flex;
  align-items: center;
  margin: 0 20px;
}
.header_left_logoBox {
  position: relative;
}
.header_left_logoBox .logo {
  width: 44px;
  height: 32px;
}
.header_left_logoBox .logo_top {
  position: absolute;
  top: -6px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.header_left .header_left_wrapper .title {
  margin-left: 12px;
  font-family: "MF LangQian";
  font-size: 22px;
  color: white;
}
.header_left::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 35px;
  background-color: #81a5c6;
}

.header_right {
  flex-grow: 1;
}
.header_right .header_right_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 18px;
}
.header_right .header_right_wrapper .title_box {
  font-size: 20px;
  color: #fff;
}
.header_right .header_right_wrapper .login_box {
  display: flex;
  align-items: center;
  color: #fff;
}
.login_box .avatar {
  margin-right: 10px;
  width: 34px;
  height: 34px;
}
.header_right .login_box .role {
  margin-right: 30px;
}
</style>