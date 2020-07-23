<template>
  <div class="top-wrapper">
    <v-header></v-header>

    <div class="container">
      <div :class="['aside', isFold ? 'expand' : '']">
        <div class="aside__title-wrapper">
          <div :class="!isFold ? 'aside__title--line' : ''"></div>
          <span class="aside__title">统一待办</span>
        </div>
        <!-- 折叠面板组件 -->
        <el-collapse accordion>
          <el-collapse-item
            class="collapse_item"
            name="1"
            :value="activeCollapseItem"
            :class="isFold ? 'hoverItem' : ''"
          >
            <template slot="title">
              <div class="aside__title-box">
                <img
                  class="icon-gear"
                  src="../assets/img/peizhi@2X.png"
                  alt="配置"
                />
                <span
                  :class="[
                    'title-box__title',
                    isFold ? 'move-right--hidden' : '',
                  ]"
                  >统一待办</span
                >
              </div>
            </template>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/todo"
                >待办</router-link
              >
            </div>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/done"
                >已办</router-link
              >
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="2">
            <template slot="title">
              <div class="aside__title-box">
                <img
                  class="icon-gear"
                  src="../assets/img/peizhi@2X.png"
                  alt="配置"
                />
                <span
                  :class="[
                    'title-box__title',
                    isFold ? 'move-right--hidden' : '',
                  ]"
                  >任务管理</span
                >
              </div>
            </template>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/task"
                >创建任务</router-link
              >
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="3">
            <template slot="title">
              <div class="aside__title-box">
                <img
                  class="icon-gear"
                  src="../assets/img/peizhi@2X.png"
                  alt="配置"
                />
                <span
                  :class="[
                    'title-box__title',
                    isFold ? 'move-right--hidden' : '',
                  ]"
                  >测试一</span
                >
              </div>
            </template>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/test1"
                >选项一</router-link
              >
            </div>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/test2"
                >选项二</router-link
              >
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="4">
            <template slot="title">
              <div class="aside__title-box">
                <img
                  class="icon-gear"
                  src="../assets/img/peizhi@2X.png"
                  alt="配置"
                />
                <span
                  :class="[
                    'title-box__title',
                    isFold ? 'move-right--hidden' : '',
                  ]"
                  >测试二</span
                >
              </div>
            </template>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/test3"
                >选项三</router-link
              >
            </div>
            <div
              :class="['collapse-subitem', isFold ? 'move-right--hidden' : '']"
              @click="addAsideClickItem()"
            >
              <router-link class="collapse-subitem__title" to="/test4"
                >选项四</router-link
              >
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="5">
            <template slot="title">
              <div class="aside__title-box">
                <img
                  class="icon-gear"
                  src="../assets/img/peizhi@2X.png"
                  alt="配置"
                />
                <span
                  :class="[
                    'title-box__title',
                    isFold ? 'move-right--hidden' : '',
                  ]"
                  >测试三</span
                >
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test5"
                >选项五</router-link
              >
            </div>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test6"
                >选项六</router-link
              >
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="main">
        <v-tabbar :activeTabs="asideClickItems" @enfold="enfold"></v-tabbar>
        <router-view class="page-content--wrapper"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Tabbar from "../components/Tabbar.vue";
export default {
  data() {
    return {
      asideClickItems: [],
      isFold: false,
      activeCollapseItem: 0,
      TabsObj: [
        { name: "待办", active: 1, url: "/todo" },
        { name: "已办", active: 1, url: "/done" },
        { name: "创建任务", active: 1, url: "/task" },
        { name: "选项一", active: 1, url: "/test1" },
        { name: "选项二", active: 1, url: "/test2" },
        { name: "选项三", active: 1, url: "/test3" },
        { name: "选项四", active: 1, url: "/test4" },
        { name: "选项五", active: 1, url: "/test5" },
        { name: "选项六", active: 1, url: "/test6" },
      ],
    };
  },
  mounted() {
    // 初次加载页面时将默认激活的tabs加入到asideClickItems中并设置session
    // 防止以后刷新后session被重置
    if (this.$session.get("activeTabs") == undefined) {
      let path = this.$route.path;
      this.TabsObj.forEach((item) => {
        if (path.includes(item.url)) {
          this.asideClickItems.push(item);
        }
      });
      this.$session.set("activeTabs", JSON.stringify(this.asideClickItems));
    }
  },
  methods: {
    // addAsideClickItem主要功能：将点击过的tab添加到asideClickItems中并设置到session
    addAsideClickItem() {
      let activeTabsFromSession = [];
      let text = event.target.innerText;
      let menuItemLen = document.getElementsByClassName("collapse-subitem")
        .length;
      let asideClickItemsLen = this.asideClickItems.length;

      if (typeof this.$session.get("activeTabs") == "string") {
        activeTabsFromSession = JSON.parse(this.$session.get("activeTabs"));
      } else {
        activeTabsFromSession = this.$session.get("activeTabs");
      }
      this.asideClickItems = activeTabsFromSession;

      // 当已点击项目长度小于项目总长度时，添加已点击项目中不存在的项
      if (asideClickItemsLen <= menuItemLen) {
        let temp = this.asideClickItems.filter((item) => {
          return item.name == text;
        });
        if (temp.length == 0) {
          let clickItem = {};
          clickItem.name = text;
          clickItem.active = 1;
          clickItem.url = this.TabsObj.filter((item) => {
            return item.name == text;
          })[0].url;
          console.log(clickItem.url);
          this.asideClickItems.push(clickItem);
        }
      }

      // 设置active方便排序，点击的tab设置为1，未点击的则加1
      this.asideClickItems.map((item) => {
        if (item.name == text) {
          item.active = 1;
        } else {
          item.active += 1;
        }
      });
      this.$session.set("activeTabs", JSON.stringify(this.asideClickItems));
    },
    enfold() {
      this.activeCollapseItem = "";
      let asideObj = document.querySelector(".aside");
      let arrowObj = document.querySelectorAll(".el-collapse-item__arrow");
      arrowObj.forEach((item) => {
        if (item.style.visibility != "hidden") {
          item.style = "visibility: hidden";
        } else {
          item.style = "visibility: visible";
        }
      });
      // this.collapseItemDisable = !this.collapseItemDisable;
      this.isFold = !this.isFold;
    },
  },
  computed: {},
  components: {
    "v-header": Header,
    "v-tabbar": Tabbar,
  },
};
</script>

<style scoped>
/*
  BEM命名规范
  .body{} 标识块
  .body__element{}  标识元素
  .body--state{}  标识修饰符
 */
.top-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.container {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.aside {
  flex-shrink: 0;
  box-shadow: 2px 44px 2px rgba(0, 0, 0, 0.05);
  width: 250px;
  background-color: #fff;
  z-index: 1;
}
.expand {
  width: 95px !important;
  /* overflow: hidden; */
}
.expand:hover {
  overflow: initial;
}
.aside__title-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}
.aside__title {
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  color: #637381;
  background: #fff;
  z-index: 1;
}
.aside__title--line {
  position: absolute;
  top: 30px;
  width: 200px;
  height: 1px;
  background: #dae0e5;
}
.aside__title::before {
  left: 30px;
}
.aside__title::after {
  right: 30px;
}
.aside__title-box {
  display: flex;
  align-items: center;
  margin-left: 42px;
  color: #212b36;
}
.icon-gear {
  width: 24px;
  height: 24px;
}
.title-box__title {
  font-size: 18px;
  margin-left: 14px;
}
.aside >>> .el-collapse-item__content {
  position: absolute;
  left: 95px;
  width: 250px;
}
.collapse_item {
  overflow: hidden;
}
.collapse-subitem__title {
  display: block;
  position: relative;
  padding-left: 100px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #000;
  text-decoration: none;
}
.collapse-subitem__title::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #d2d2d2;
  border-radius: 50%;
}
.router-link-active {
  background-color: #edf4fd;
  border-right: 4px solid #0270e0;
  color: #0166de;
}
.router-link-active::before {
  background-color: #0270e0;
}
.main {
  flex-grow: 1;
}
.page-content--wrapper {
  height: calc(100% - 45px);
  background: #f5f5f5;
  overflow-y: auto;
}
.page-content--wrapper::-webkit-scrollbar {
  width: 0;
}
</style>

<style>
.aside .el-collapse-item__content {
  padding-bottom: 0;
}
.container .el-main {
  overflow: hidden;
  border-left: 0;
}
</style>
