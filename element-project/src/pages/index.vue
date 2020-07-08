<template>
  <div>
    <v-header></v-header>
    <div class="container">
      <!-- 侧边栏开始 -->
      <div class="aside">
        <div class="aside_title_wrapper">
          <span class="aside_title">统一待办</span>
        </div>
        <el-collapse>
          <el-collapse-item class="collapse_item">
            <template slot="title">
              <div class="title_box">
                <img class="icon_gear" src="../assets/img/peizhi@2X.png" alt="配置" />
                <span class="item_title">统一待办</span>
              </div>
            </template>
            <div class="collapse_subitem" @click="addAsideClickItem()">
              <router-link class="subitem_title" to="/todo">待办</router-link>
            </div>
            <div class="collapse_subitem" @click="addAsideClickItem()">
              <router-link class="subitem_title" to="/done">已办</router-link>
            </div>
            <div class="collapse_subitem" @click="addAsideClickItem()">
              <router-link class="subitem_title" to="/test">测试</router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 侧边栏结束 -->
      <el-main>
        <v-tabbar :navBarList="asideClickItems"></v-tabbar>
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Tabbar from '../components/Tabbar'
export default {
  data () {
    return {
      asideClickItems: []
    }
  },
  methods: {
    addAsideClickItem () {
      event.target.classList.add('subitem_selected')
      if(this.asideClickItems.length !== 0) {
        this.asideClickItems.map(item => {
          item.active = false
          return item
        })
      }
      var clickItem = {}
      clickItem.name = event.target.innerText
      clickItem.active = true
      this.asideClickItems.push(clickItem)
    }
  },
  computed: {
    
  },
  components: {
    'v-header': Header,
    'v-tabbar': Tabbar
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.aside {
  background-color: #fff;
  flex-shrink: 0;
}
.aside .aside_title_wrapper {
  width: 250px;
}
.aside .aside_title_wrapper .aside_title {
  position: relative;
  display: block;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: #637381;
}
.aside_title::before,
.aside_title::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 1px;
  background-color: #ecf1f4;
}
.aside .aside_title::before {
  left: 10px;
}
.aside .aside_title::after {
  right: 10px;
}

.title_box {
  display: flex;
  align-items: center;
  margin-left: 42px;
  color: #212b36;
}
.title_box .icon_gear {
  width: 24px;
  height: 24px;
}
.title_box .item_title {
  font-size: 18px;
  margin-left: 14px;
}

.collapse_item .subitem_title {
  display: block;
  position: relative;
  padding: 0 100px 0 100px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #000;
  text-decoration: none;
}
.collapse_item .subitem_title::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 82px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #d2d2d2;
  border-radius: 50%;
}
.collapse_item .subitem_selected {
  background-color: #edf4fd;
  border-right: 4px solid #0270e0;
  color: #0166de;
}
.collapse_item .subitem_selected::before {
  background-color: #0270e0;
}
/* 样式穿透，修改默认的element元素样式 */
>>> .el-collapse-item__content {
  padding-bottom: 0;
}
>>> .el-main {
  padding: 0;
}
</style>
