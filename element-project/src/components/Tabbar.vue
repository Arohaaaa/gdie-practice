<template>
  <div>
    <div class="tabBar">
      <div class="tabBar_icon_wrapper">
        <div class="tabBar_icon_box">
          <img class="tabBar_icon_task" src="../assets/img/icon 2 – 41@2X.png" />
        </div>
        <div class="tabBar_icon_box">
          <img class="tabBar_icon_back" src="../assets/img/后退.png" />
        </div>
      </div>
      <div class="tabBar_nav">
        <span class="nav_active">{{navBarListSorted[0].name}}</span>
        <ul class="nav_others">
          <li class="nav_others_item" v-for="item in navBarListSorted.slice(1)">
            <span class="nav_others_title">{{item.name}}</span>
            <img class="nav_others_icon" src="../assets/img/叉.png" />
          </li>
        </ul>
      </div>
      <div class="tabBar_icon_wrapper">
        <div class="tabBar_icon_box">
          <img class="tabBar_icon_forward" src="../assets/img/快进.png" />
        </div>
        <div class="tabBar_icon_box">
          <img class="tabBar_icon_refresh" src="../assets/img/刷新@2X.png" />
        </div>
        <div class="tabBar_close">
          <span class="close">关闭操作</span>
          <img class="triangle" src="../assets/img/多边形 1@2X.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'navBarList'
  ],
  data () {
    return {

    }
  },
  methods: {
    sortBy (key) {
      return function (obj1,obj2) {
        return obj1[key] - obj2[key]
      }
    }
  },
  computed: {
    // 根据active排序。
    navBarListSorted: function () {
      if(this.navBarList.length == 0) {
        this.navBarList = [{name:'待办',active:1}]
      }
      return this.navBarList.sort(this.sortBy('active'))
    }
  },
  watch: {
    navBarList: {
　　　　handler(newValue, oldValue) {
　　　　　　for (let i = 0; i < newValue.length; i++) {
　　　　　　　　if (oldValue[i] != newValue[i]) {
      
　　　　　　　　}
　　　　　　}
　　　　},
　　　　deep: true
　　}
  }
}
</script>

<style scoped>
.tabBar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 44px;
}
.tabBar .tabBar_icon_wrapper {
  display: flex;
}
.tabBar .tabBar_icon_wrapper .tabBar_icon_box {
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
}
.tabBar_icon_box .tabBar_icon_task {
  width: 12px;
  height: 10px;
}
.tabBar_icon_box .tabBar_icon_refresh {
  width: 12px;
  height: 12px;
}
.tabBar_icon_box .tabBar_icon_back,
.tabBar_icon_box .tabBar_icon_forward {
  position: relative;
  top: 6px;
  width: 15px;
  height: 22px;
}
.tabBar_icon_wrapper .tabBar_close {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 15px;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
}
.tabBar_icon_wrapper .tabBar_close .close {
  color: #919eab;
}
.tabBar_close .triangle {
  margin-left: 4px;
  width: 8px;
  height: 4px;
}

.tabBar .tabBar_nav {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  overflow: hidden;
}
.tabBar_nav .nav_active {
  background-color: #f5f5f5;
  width: 134px;
  flex-shrink: 0;
  border-left: 1px solid #dae0e5;
  text-align: center;
  line-height: 46px;
  color: #0270e0;
}
.tabBar_nav .nav_others {
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #dae0e5;
  overflow: hidden;
}
.nav_others .nav_others_item {
  border-left: 1px solid #dae0e5;
  flex-shrink: 0;
  height: 43px;
  line-height: 43px;
  padding: 0 12px 0 42px;
}
.nav_others .nav_others_item .nav_others_title {
  color: #212b36;
}
.nav_others .nav_others_item .nav_others_icon {
  margin-left: 10px;
  width: 10px;
  height: 10px;
}
</style>