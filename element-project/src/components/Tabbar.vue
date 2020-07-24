<template>
  <div class="tabBar">
    <div class="tabBar-icon-wrapper">
      <div class="tabBar-icon-box" style="border-left: none" @click="enfold">
        <i class="iconfont icon-renwuzhongxin"></i>
      </div>
      <div class="tabBar-icon-box">
        <i class="iconfont icon-kuaitui"></i>
      </div>
    </div>
    <div class="tabBar-nav">
      <div class="nav__item-wrapper">
        <div class="nav__item" v-for="item in tabs">
          <transition name="fade">
            <template v-if="item.active !== 1">
              <div class="nav__item--others" @click="enableActive(item)">
                <span class="nav__item__title">{{ item.name }}</span>
                <img
                  class="nav__item__close"
                  src="../assets/img/叉.png"
                  @click.stop="closeTab"
                />
              </div>
            </template>
          </transition>
          <template v-if="item.active == 1">
            <span class="nav__item--active">{{ item.name }}</span>
          </template>
        </div>
      </div>
    </div>
    <div class="tabBar-icon-wrapper close-box--fl">
      <div class="tabBar-icon-box">
        <i class="iconfont icon-kuaijin"></i>
      </div>
      <div class="tabBar-icon-box" @click="render">
        <i class="iconfont icon-refresh"></i>
      </div>
      <div class="tabBar-close">
        <div class="tabBar-close-visiblePart">
          <span class="tabBar-close__title">关闭操作</span>
          <img
            class="tabBar-close__triangle"
            src="../assets/img/多边形 1@2X.png"
          />
        </div>
        <div class="tabBar-close-hiddenPart">
          <span @click="closeTabs('others')" class="hiddenTitle"
            >关闭其它标签</span
          >
          <span @click="closeTabs('left')" class="hiddenTitle"
            >关闭左侧标签</span
          >
          <span @click="closeTabs('right')" class="hiddenTitle"
            >关闭右侧标签</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    closeTab() {
      var tabName = event.target.previousSibling.innerText;
      this.tabs = this.tabs.filter((item) => {
        return item.name != tabName;
      });
      this.$session.set("activeTabs", this.tabs);
    },
    closeTabs(where) {
      let fromSession = this.$session.get("activeTabs");
      let sessionTabs, activeTabIdx;
      if (Array.isArray(fromSession)) {
        sessionTabs = this.$session.get("activeTabs");
      } else {
        sessionTabs = JSON.parse(this.$session.get("activeTabs"));
      }
      sessionTabs.forEach((item, index) => {
        if (item.active == 1) {
          activeTabIdx = index;
        }
      });
      if (where == "others") {
        this.tabs = sessionTabs.filter((item) => {
          return item.active == 1;
        });
      } else if (where == "left") {
        this.tabs = sessionTabs.filter((item, index) => {
          return index >= activeTabIdx;
        });
      } else {
        this.tabs = sessionTabs.filter((item, index) => {
          return index <= activeTabIdx;
        });
      }
      this.$session.set("activeTabs", this.tabs);
    },
    enableActive(obj) {
      this.tabs.map((item) => {
        if (item.name == obj.name) {
          item.active = 1;
        } else {
          item.active += 1;
        }
      });
      console.log(obj.url);
      this.$router.push(obj.url);
      this.$session.set("activeTabs", this.tabs);
    },
    sortBy(key) {
      return function(obj1, obj2) {
        return obj1[key] - obj2[key];
      };
    },
    copy(ladel) {
      var obj = {};
      for (var i in ladel) {
        if (typeof ladel[i] == "object") {
          obj[i] = this.copy(ladel[i]); //递归
        } else {
          obj[i] = ladel[i];
        }
      }
      return obj;
    },
    enfold() {
      this.$emit("enfold");
    },
    render() {
      this.$emit("render");
      console.log("子组件点击了");
    },
  },
  mounted() {
    var activeTabsFromSession = {};
    if (typeof this.$session.get("activeTabs") == "string") {
      activeTabsFromSession = JSON.parse(this.$session.get("activeTabs"));
    } else {
      activeTabsFromSession = this.$session.get("activeTabs");
    }
    this.tabs = activeTabsFromSession;
  },
  computed: {},
  watch: {
    // 通过对父组件传来的activeTabs进行侦听，一旦值发生变化则触发回调函数
    activeTabs: {
      handler(newValue, oldValue) {
        // 如果直接使用activeTabs则会导致该回调无限循环
        var activeTabsCopyObj = this.copy(this.activeTabs);
        this.tabs = Object.values(activeTabsCopyObj);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.tabBar {
  position: relative;
  font-size: 14px;
  height: 44px;
  border-left: 1px solid #dae0e5;
}
.tabBar-icon-wrapper {
  display: inline-flex;
  border-bottom: 1px solid #dae0e5;
  z-index: 1;
}
.tabBar-icon-box {
  float: left;
  height: 44px;
  line-height: 44px;
  width: 40px;
  text-align: center;
  border-left: 1px solid #dae0e5;
}
.tabBar-icon-wrapper .tabBar-icon-box {
  color: #8d9eab;
  cursor: pointer;
}
.tabBar-icon-wrapper .tabBar-icon-box:hover {
  color: black;
}
.icon-renwuzhongxin {
  font-size: 14px;
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
  position: absolute;
  top: 0;
  left: 81px;
  width: 100%;
  border-bottom: 1px solid #dae0e5;
}
.nav__item-wrapper {
  width: 100%;
  height: 44px;
  overflow: hidden;
}
.nav__item {
  display: inline-block;
  border-left: 1px solid #dae0e5;
  width: 134px;
  line-height: 44px;
}
.nav__item--active {
  display: block;
  background-color: #f5f5f5;
  width: 134px;
  flex-shrink: 0;
  text-align: center;
  color: #0270e0;
}
.nav__item--others {
  padding: 0 12px 0 42px;
  height: 43px;
}
.nav__item__title {
  color: #212b36;
}
.nav__item__close {
  margin-left: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}

.tabBar-close {
  display: flex;
  flex-direction: column;
  height: 43px;
  width: 80px;
  border-left: 1px solid #dae0e5;
  overflow: hidden;
}
.close-box--fl {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
}
.tabBar-close:hover {
  overflow: initial;
}
.tabBar-close-visiblePart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 43px;
  width: 100%;
}
.tabBar-close-hiddenPart {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid #dae0e5;
  z-index: 1;
}
.tabBar-close-hiddenPart .hiddenTitle {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  background: white;
  border-bottom: 1px solid #d8e0e5;
}
.tabBar-close__title {
  color: #919eab;
}
.tabBar-close__triangle {
  margin-left: 4px;
  width: 8px;
  height: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
