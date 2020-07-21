import Vue from 'vue'
import Vuex from 'vuex'
//import path from './path.json'
// 使用vuex
Vue.use(Vuex)

// 1、state：创建初始化状态
const state = {
  //无法通过外部管理，打包时候路径会被改变
  /*开发环境*/
  path: "http://www.gdie.com:10023/platform-zuul/platform-workitem",
  upmsPath: "http://www.gdie.com:10023/platform-zuul/platform-upms",
  authPath: "http://www.gdie.com:10023/platform-zuul/platform-auth",
  /*测试环境*/
  // path: "http://www.gdie.com:10023/platform-gateway-test/platform-workitem",
  // upmsPath: "http://www.gdie.com:10023/platform-gateway-test/platform-upms",

  //文件上传地址
  filePath: "http://www.gdie.com:10023/platform-zuul/platform-file",
  //filePath:"https://xtbgyy.digitalgd.com.cn/jxwoatysp/platform-gateway/platform-file",

  sysUserId: "",
  sysUserName: "",
  type: "",
  deptId: "",
  deptwxId: "",
  doingType: false,
  code: "activiti",
  routeList: [],
  menuData: [],
  keepSearch: {}
}
//}

// 2、mutations：创建改变状态的方法
const mutations = {
  // 状态变更函数-一般大写
  setPath(state, newVal) {
    state.path = newVal;
  },
  setSysUserId(state, newVal) {
    state.sysUserId = newVal;
  },
  setSysUserName(state, newVal) {
    state.sysUserName = newVal;
  },
  setDeptId(state, newVal) {
    state.deptId = newVal;
  },
  setDeptwxId(state, newVal) {
    state.deptwxId = newVal;
  },
  setType(state, newVal) {
    state.setType = newVal;
  },
  setDoingType(state, newVal) {
    state.setDoingType = newVal;
  },
  setRouteList(state, newVal) {
    state.routeList = newVal;
  },
  pushRouteList(state, newVal) {
    state.routeList.push(newVal);
  },
  coverRouteQuery(state, newVal) {
    state.routeList[newVal.num]["query"] = newVal.query;
  },
  removeRouteList(state, newVal) {
    for (let i = 0; i < state.routeList.length; i++) {
      if (state.routeList[i].code == newVal) {
        console.log(state.routeList[i].code)
        state.routeList.splice(i, 1);
      }
    }
  },
  setCode(state, newVal) {
    state.setCode = newVal;
  },
  setKeepSearch(state, newVal) {
    state.search = newVal;
  },
  pushKeepSearch(state, newVal) {
    for (let key in newVal) {
      state.keepSearch[key] = newVal[key];
    }
  },
  removeKeepSearch(state, newVal) {
    delete state.keepSearch[newVal];
  },

}

// 3、getters：提供外部获取state
const getters = {
  path: function (state) {
    return state.path;
  },
  upmsPath: function (state) {
    return state.upmsPath;
  },
  sysUserId: function (state) {
    return state.sysUserId;
  },
  sysUserName: function (state) {
    return state.sysUserName;
  },
  deptId: function (state) {
    return state.deptId;
  },
  deptwxId: function (state) {
    return state.deptwxId;
  },
  type: function (state) {
    return state.deptwxId;
  },
  doingType: function (state) {
    return state.doingType;
  },
  routeList: function (state) {
    return state.routeList;
  },
  code: function (state) {
    return state.code;
  },
  keepSearch(state) {
    return state.keepSearch;
  },
  filePath(state) {
    return state.filePath;
  },
  authPath(state) {
    return state.authPath;
  },
}

// 4、actions：创建驱动方法改变mutations
const actions = {
  // 触发mutations中相应的方法-一般小写
  setPath({ commit }, data) {
    commit('setPath', data)
  },
  setSysUserId({ commit }, data) {
    commit('setSysUserId', data)
  },
  setSysUserName({ commit }, data) {
    commit('setSysUserName', data)
  },
  setDeptId({ commit }, data) {
    commit('setDeptId', data)
  },
  setDeptwxId({ commit }, data) {
    commit('setDeptwxId', data)
  },
  setType({ commit }, data) {
    commit('setType', data)
  },
  setDoingType({ commit }, data) {
    commit('setDoingType', data)
  },
  setRouteList({ commit }, data) {
    commit('setRouteList', data)
  },
  setRouteList({ commit }, data) {
    commit('setCode', data)
  },
  setKeepSearch({ commit }, data) {
    commit('setKeepSearch', data)
  },
}

// 5、全部注入Store中
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

// 6、输出store
export default store;