<template>
  <div>
    <div class="tabBar">
      <div class="tabBar-icon-wrapper">
        <div class="tabBar-icon-box">
          <img class="icon-box__task" src="../assets/img/icon 2 – 41@2X.png" />
        </div>
        <div class="tabBar-icon-box">
          <img class="icon-box__back" src="../assets/img/后退.png" />
        </div>
      </div>
      <div class="tabBar-nav">
        <span class="nav__item--active">{{ tabs[0].name }}</span>
        <ul class="nav__item-wrapper">
          <li class="nav__item" v-for="item in tabs.slice(1)">
            <span class="nav__item__title">{{ item.name }}</span>
            <img class="nav__item__title" src="../assets/img/叉.png" />
          </li>
        </ul>
      </div>
      <div class="tabBar-icon-wrapper">
        <div class="tabBar-icon-box">
          <img class="icon-box__forward" src="../assets/img/快进.png" />
        </div>
        <div class="tabBar-icon-box">
          <img class="icon-box__refresh" src="../assets/img/刷新@2X.png" />
        </div>
        <div class="tabBar-close">
          <span class="tabBar-close__title">关闭操作</span>
          <img class="tabBar-close__triangle" src="../assets/img/多边形 1@2X.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // props: {
  //   activeTabs: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      tabs: []
    };
  },
  methods: {
    sortBy(key) {
      return function(obj1, obj2) {
        return obj1[key] - obj2[key];
      };
    },
  },
  created () {
    this.tabs = JSON.parse(this.$cookies.get('activeTabs'))
    this.tabs.sort(this.sortBy("active"))
  }
};
</script>

<style scoped>
.tabBar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 44px;
}
.tabBar-icon-wrapper {
  display: flex;
}
.tabBar-icon-box {
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
}
.icon-box__task {
  width: 12px;
  height: 10px;
}
.icon-box__back,
.icon-box__forward {
  position: relative;
  top: 6px;
  width: 15px;
  height: 22px;
}
.icon-box__refresh {
  width: 12px;
  height: 12px;
}

.tabBar-nav {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  overflow: hidden;
}
.nav__item--active {
  background-color: #f5f5f5;
  width: 134px;
  flex-shrink: 0;
  border-left: 1px solid #dae0e5;
  text-align: center;
  line-height: 46px;
  color: #0270e0;
}
.nav__item-wrapper {
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #dae0e5;
  overflow: hidden;
}
.nav__item {
  border-left: 1px solid #dae0e5;
  flex-shrink: 0;
  height: 43px;
  line-height: 43px;
  padding: 0 12px 0 42px;
}
.nav__item__title {
  color: #212b36;
}
.nav__item__title {
  margin-left: 10px;
  width: 10px;
  height: 10px;
}

.tabBar-close {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 15px;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
}
.tabBar-close__title {
  color: #919eab;
}
.tabBar-close__triangle {
  margin-left: 4px;
  width: 8px;
  height: 4px;
}
</style>
