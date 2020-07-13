<template>
  <div>
    <v-header></v-header>

    <div class="container">
      <div class="aside">
        <div class="aside__title-wrapper">
          <span class="aside__title">统一待办</span>
        </div>
        <!-- 折叠面板组件 -->
        <el-collapse value="1">
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
        </el-collapse>
      </div>
      <el-main>
        <v-tabbar></v-tabbar>
        <router-view></router-view>
      </el-main>
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
          {name:'待办',active: 1,url:'/todo'}, 
          {name:'已办',active: 1,url:'/done'}
      ]
    };
  },
  mounted () {
    let path = this.$route.path
    this.TabsObj.forEach(item => {
      if(path.includes(item.url)) {
        this.asideClickItems.push(item)
      }
    })
    this.$cookies.set('activeTabs',JSON.stringify(this.asideClickItems))
  },
  methods: {
    addAsideClickItem() {
      let text = event.target.innerText
      // 获取兄弟节点个数，由于该组件渲染出来之后外层多包裹了一个div，因此要获取两次parentNode
      let menuItemLen = event.target.parentNode.parentNode.childNodes.length;
      let asideClickItemsLen = this.asideClickItems.length;
      // 如果没有点击，则侧边栏点击过的项目列表为空，直接添加点击对象
      if (asideClickItemsLen == 0) {
        let clickItem = {};
        clickItem.name = text;
        clickItem.active = 1;
        this.asideClickItems.push(clickItem);
      }
      // 如果列表里有值：判断是否已经超出菜单项目的个数，如果超出，则不添加
      // 如果未超出，则进行第二次判断，判断添加的点击项是否已存在，若不存在则添加，存在则不做操作。
      // 将正在点击的项目active设置为1，其他设置为每点击一次就加1。
      else if (asideClickItemsLen <= menuItemLen) {
        let temp = this.asideClickItems.filter((item) => {
          return item.name == text;
        });
        if (temp.length == 0) {
          let clickItem = {};
          clickItem.name = text;
          clickItem.active = 1;
          this.asideClickItems.push(clickItem);
        }
      }
      this.asideClickItems.map((item) => {
        if (item.name == text) {
          item.active = 1;
        } else {
          item.active += 1;
        }
      });
      this.$cookies.set('activeTabs',JSON.stringify(this.asideClickItems))
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
.container {
  display: flex;
}
.aside {
  background-color: #fff;
}
.aside__title {
  position: relative;
  display: block;
  width: 250px;
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
  background-color: #ecf1f4;
}
.aside__title::before {
  left: 10px;
}
.aside__title::after {
  right: 10px;
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
</style>

<style>
.aside .el-collapse-item__wrap {
  border-bottom: none;
}
.aside .el-collapse-item__content {
  padding-bottom: 0;
}
.container .el-main {
  padding: 0;
  overflow: hidden;
}
.container > .el-main {
  border-left: 0;
}
</style>
