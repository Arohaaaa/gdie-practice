<template>
  <div id="todo">
    <!-- 顶部导航栏 -->
    <!-- <div class="navBar">
      <i class="iconfont icon-left" @click="$router.go(-1)"></i>
      <span class="navBar-title">待办</span>
    </div>-->
    <div class="search-input-wrapper">
      <div class="search-input-box">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <ul class="main">
      <li class="affair" @click="$router.push('/donetail')">
        <p class="affair-content">【用车】习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
        <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
        <span class="affair-otherInfo">当前环节：领导审批</span>
      </li>
      <li class="affair">
        <p class="affair-content">【用车】习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
        <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
        <span class="affair-otherInfo">当前环节：领导审批</span>
      </li>
      <li class="affair">
        <p class="affair-content">【用车】习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
        <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
        <span class="affair-otherInfo">当前环节：领导审批</span>
      </li>
      <li class="affair">
        <p class="affair-content">【用车】习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
        <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
        <span class="affair-otherInfo">当前环节：领导审批</span>
      </li>
      <li class="affair">
        <p class="affair-content">【用车】习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
        <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
        <span class="affair-otherInfo">当前环节：领导审批</span>
      </li>
    </ul>
    <!-- 底部tab栏 -->
    <van-tabbar route>
      <van-tabbar-item name="todo" replace to="/todo">
        <span>待办</span>
        <template #icon="props">
          <img :src="icon.active" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="done" replace to="/done">
        <span>已办</span>
        <template #icon="props">
          <img :src="icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active:
          "https://yanxuan.nosdn.127.net/8fb2e1c62456b4dc61e9b562520f6cfb.png",
        inactive:
          "https://yanxuan.nosdn.127.net/d4807d78cc62197aa11a29585b10bc02.png",
      },
    };
  },
  methods: {
    onClickLeft: function() {
      alert("你确定要返回吗");
      alert(plus.navigator.isImmersedStatusbar());
    }
  },
};
</script>
