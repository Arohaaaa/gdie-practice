<template>
  <div>
    <v-header></v-header>
    <div class="container">
      <!-- 侧边栏开始 -->
      <div class="aside">
        <div class="aside_title_wrapper">
          <span class="aside_title">统一待办</span>
        </div>
        <el-collapse value="1">
          <el-collapse-item class="collapse_item" name="1">
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
              <router-link class="subitem_title" to="/tododetail">已办详情</router-link>
            </div>
            <div class="collapse_subitem" @click="addAsideClickItem()">
              <router-link class="subitem_title" to="/donedetail">待办详情</router-link>
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
      asideClickItems: [
        {name:'待办',active:1}
      ],
      active: 1,
    }
  },
  methods: {
    addAsideClickItem () {
      // 获取兄弟节点个数，由于该组件渲染出来之后外层多包裹了一个div，因此要获取两次parentNode
      let menuItemLen = event.target.parentNode.parentNode.childNodes.length
      let asideClickItemsLen = this.asideClickItems.length
      // 如果没有点击，则侧边栏点击过的项目列表为空，直接添加点击对象
      if(asideClickItemsLen == 0) {
        let clickItem = {}
        clickItem.name = event.target.innerText
        clickItem.active = this.active 
        this.asideClickItems.push(clickItem)
      } 
      // 如果列表里有值：判断是否已经超出菜单项目的个数，如果超出，则不添加
      // 如果未超出，则进行第二次判断，判断添加的点击项是否已存在，若不存在则添加，存在则不做操作。
      // 将正在点击的项目active设置为1，其他设置为每点击一次就加1。
      else if(asideClickItemsLen <= menuItemLen){
        let temp = this.asideClickItems.filter(item => {
          return item.name == event.target.innerText
        })
        if(temp.length == 0) {
          let clickItem = {}
          clickItem.name = event.target.innerText
          clickItem.active = this.active 
          this.asideClickItems.push(clickItem)
        }
      }
      this.asideClickItems.map(item => {
        if(item.name == event.target.innerText) {
          item.active = 1
        }
        else{ item.active += 1 }
      })
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
>>> .el-collapse-item__wrap {
  border-bottom: none;
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
.collapse_item .router-link-active {
  background-color: #edf4fd;
  border-right: 4px solid #0270e0;
  color: #0166de;
}
.collapse_item .router-link-active::before {
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
