<template>
  <div id="body">
    <v-header></v-header>

    <div class="container">
      <div class="aside">
        <div class="aside__title-wrapper">
          <span class="aside__title">统一待办</span>
        </div>
        <!-- 折叠面板组件 -->
        <el-collapse value="1" accordion>
          <el-collapse-item class="collapse_item" name="1">
            <template slot="title">
              <div class="aside__title-box">
                <img class="icon-gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="title-box__title">统一待办</span>
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/todo">待办</router-link>
            </div>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/done">已办</router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="2">
            <template slot="title">
              <div class="aside__title-box">
                <img class="icon-gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="title-box__title">任务管理</span>
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/task">创建任务</router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="3">
            <template slot="title">
              <div class="aside__title-box">
                <img class="icon-gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="title-box__title">测试一</span>
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test1">选项一</router-link>
            </div>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test2">选项二</router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="4">
            <template slot="title">
              <div class="aside__title-box">
                <img class="icon-gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="title-box__title">测试二</span>
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test3">选项三</router-link>
            </div>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test4">选项四</router-link>
            </div>
          </el-collapse-item>
          <el-collapse-item class="collapse_item" name="5">
            <template slot="title">
              <div class="aside__title-box">
                <img class="icon-gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="title-box__title">测试三</span>
              </div>
            </template>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test5">选项五</router-link>
            </div>
            <div class="collapse-subitem" @click="addAsideClickItem()">
              <router-link class="collapse-subitem__title" to="/test6">选项六</router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="main">
        <el-main>
          <v-tabbar :activeTabs="asideClickItems"></v-tabbar>
          <router-view></router-view>
        </el-main>
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
#body {
  width: 100%;
  height: 100%;
}
.container {
  display: block;
  height: 100%;
  overflow: hidden;
}
.aside {
  position: fixed;
  top: 60px;
  border-right: 1px solid #dae0e5;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  width: 250px;
  background-color: #fff;
}
.aside__title {
  position: relative;
  display: block;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: #637381;
}
.aside__title::before,
.aside__title::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 1px;
  background-color: #ecf0f3;
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
  position: absolute;
  top: 60px;
  left: 250px;
  width: calc(100% - 250px);
}
</style>

<style>
.aside .el-collapse-item__wrap {
  border-bottom: none;
}
.aside .el-collapse-item__content {
  padding-bottom: 0;
}
.el-collapse-item__header.is-active {
  border-bottom-color: #ebeef5;
}
.container .el-main {
  padding: 0;
  overflow: hidden;
}
.container > .el-main {
  border-left: 0;
}
</style>
