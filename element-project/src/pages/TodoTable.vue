<template>
  <div id="main">
    <div class="title">
      <span>待办</span>
    </div>
    <div class="content">
      <v-aside></v-aside>
      <el-main>
        <div class="table-search-wrapper">
          <div class="search-input-box">
            <img class="icon-search" src="../assets/img/搜索.png" />
            <input placeholder="请输入标题/环节/应用名称进行搜索" type="text" />
          </div>
          <div class="search-select-box" @click="dialogFormVisible = !dialogFormVisible">
            <img class="icon-select" src="../assets/img/筛选.png" />
            <span class="title">筛选</span>
            <img class="icon-arrow" src="../assets/img/箭头（下）@2X.png" />
          </div>
          <div
            :class="{
              search__hiddenItem: true,
              search__hidden: dialogFormVisible,
            }"
          >
            <div class="hiddenItem-title-box">
              <div class="title">筛选</div>
              <img class="icon-close" src="../assets/img/关闭@2X.png" />
            </div>
            <div class="hiddenItem-form-box">
              <label for="classify">分类</label>
              <div class="form__input-box">
                <el-select v-model="value" clearable placeholder="请选择分类">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <label for="createtime">创建时间</label>
              <div class="form__input-box">
                <input id="createtime" type="text" placeholder="开始时间 - 结束时间" />
                <img class="icon-calendar" src="../assets/img/日历@2X.png" />
              </div>
            </div>
            <div class="hiddenItem-btn-box">
              <button class="btn">确定</button>
              <button class="btn">取消</button>
            </div>
          </div>
        </div>
        <v-table :tableData="tableData"></v-table>
        <div class="table-pagination-wrapper">
          <el-pagination
            :page-sizes="[10, 30, 50, 100]"
            :page-size="10"
            :pager-count="5"
            layout="sizes, prev, pager, next"
            :total="1000"
          ></el-pagination>
          <!-- 存疑 -->
          <span class="el-pagination__jump">
            <div class="el-input el-pagination__editor is-in-pagination">
              <input type="number" autocomplete="off" min="1" max="100" class="el-input__inner" />
            </div>跳转
          </span>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import Aside from '../components/Aside.vue'
import Table from '../components/Table.vue'
export default {

  data () {
    return {
      dialogFormVisible: true,
      options: [{
        value: '选项1',
        label: '分类一'
      }, {
        value: '选项2',
        label: '分类二'
      }],
      value: '',
      tableData: [{
        'title': '标题',
        'segment': '环节',
        'application': '应用',
        'category': '分类',
        'handleTime': '处理时间',
        'operation': '操作'
      },{
        'title': '请假审批',
        'segment': '领导审批',
        'application': 'OA系统',
        'category': '内务',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '采购审批',
        'segment': '领导审批',
        'application': '采购系统',
        'category': '市场',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '请假审批',
        'segment': '领导审批',
        'application': 'OA系统',
        'category': '内务',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '采购审批',
        'segment': '领导审批',
        'application': '采购系统',
        'category': '市场',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '请假审批',
        'segment': '领导审批',
        'application': 'OA系统',
        'category': '内务',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '采购审批',
        'segment': '领导审批',
        'application': '采购系统',
        'category': '市场',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '请假审批',
        'segment': '领导审批',
        'application': 'OA系统',
        'category': '内务',
        'handleTime': '2020-04-22',
        'operation': '查看'
      },{
        'title': '采购审批',
        'segment': '领导审批',
        'application': '采购系统',
        'category': '市场',
        'handleTime': '2020-04-22',
        'operation': '查看'
      }]
    };
  },
  methods: {
    viewDetail (url) {
      this.$router.push(url)
    }
  },
  components: {
    'v-aside': Aside,
    'v-table': Table
  }
}
</script>

<style scoped>
#main {
  background-color: #f5f5f5;
  padding: 20px 30px 60px 30px;
}
#main > .title {
  font-size: 26px;
}
.title {
  color: #212b36;
}
.content {
  display: flex;
  margin-top: 18px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px#dae0e5;
}

.table-search-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 82px;
}
.search-input-box,
.search-select-box {
  display: flex;
  align-items: center;
  border-left: 1px solid #dae0e5;
  cursor: pointer;
}
.search-input-box .icon-search {
  margin-left: 12px;
  width: 14px;
  height: 14px;
}
.search-input-box input {
  margin: 0 42px 0 12px;
  border: none;
  outline: none;
  color: rgba(145, 158, 171, 1);
  font-size: 14px;
}
.search-select-box .icon-select {
  margin-left: 12px;
  width: 16px;
  height: 16px;
}
.search-select-box .title {
  margin-left: 8px;
  font-size: 14px;
  color: rgba(33, 43, 54, 1);
}
.search-select-box .icon-arrow {
  margin: 0 12px 0 8px;
  width: 10px;
  height: 6px;
}

.search__hidden {
  visibility: hidden;
}
.search__hiddenItem {
  position: absolute;
  top: 84px;
  background-color: #fff;
  box-shadow: -2px 2px 2px rgba(63, 63, 68, 0.16);
  width: 350px;
  z-index: 2020;
}
.hiddenItem-title-box {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 18px;
}
.hiddenItem-title-box .title {
  font-weight: bold;
  font-size: 16px;
  color: rgba(33, 43, 54, 1);
}
.hiddenItem-title-box .icon-close {
  width: 12px;
  height: 12px;
}
.hiddenItem-form-box {
  margin-top: 33px;
  padding: 0 24px;
  font-size: 14px;
}
.hiddenItem-form-box label {
  display: block;
  color: rgba(33, 43, 54, 1);
  margin-bottom: 8px;
}
.form__input-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  height: 36px;
  border: 1px solid rgba(196, 205, 213, 1);
  border-radius: 5px;
}
.form__input-box input {
  border: none;
  width: 100%;
  margin-left: 10px;
  color: rgba(145, 158, 171, 1);
}
.form__input-box .icon_triangle {
  margin-right: 12px;
  width: 8px;
  height: 4px;
}
.icon-calendar {
  margin-right: 12px;
  width: 16px;
  height: 16px;
}
.hiddenItem-btn-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(217, 217, 217, 1);
  padding: 16px 24px 16px 0;
}
.hiddenItem-btn-box .btn {
  padding: 8px 22px;
  margin-left: 10px;
  background-color: #fff;
  outline: none;
  border: 1px solid rgba(196, 205, 213, 1);
  border-radius: 4px;
}
.hiddenItem-btn-box .btn:nth-child(1) {
  background-color: #0270e0;
  color: #fff;
}
.content_table table {
  border-top: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
  width: 100%;
}
.content_table table tr td {
  padding-left: 12px;
  vertical-align: middle;
}
.content_table table tr:nth-child(1) {
  width: 100%;
  height: 42px;
  font-size: 12px;
}
.content_table table tr:nth-child(1) td {
  color: rgba(99, 115, 129, 1);
}
.content_table table tr:nth-child(n + 2) {
  width: 100%;
  height: 60px;
}
.content_table table tr:nth-child(n + 2) td {
  font-size: 14px;
  color: rgba(33, 43, 54, 1);
}
.content_table table tr:nth-child(odd) {
  background-color: rgba(238, 241, 244, 1);
}
.content_table table tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 1);
}

.content_table table tr td:nth-child(n + 2) {
  border-left: 1px solid #dae0e5;
}
.content_table table tr:nth-child(n + 2) td:nth-last-child(1) {
  color: rgba(2, 112, 224, 1);
  border-right: 1px solid #dae0e5;
  cursor: pointer;
}
.content_table table .td_handled {
  padding: 6px 12px;
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
  border-radius: 2px;
  font-size: 12px;
  color: #67c23a;
}
.content_table table .td_abolish {
  padding: 6px 12px;
  background-color: #f4f4f5;
  border: 1px solid #e9e9eb;
  border-radius: 2px;
  font-size: 12px;
  color: #919eab;
}
</style>


<style>
/* 
  通过写在无scoped的style元素里的样式来覆盖
  element默认样式同时在父级元素上定义一个类
  名防止污染全局样式。
 */
.aside .el-aside {
  padding: 24px;
}
.el-main {
  border-left: 1px solid #dae0e5;
}
.menu .el-menu {
  border-right: 0;
}
.menu .el-submenu__title {
  margin: 20px 0 8px 0;
  height: auto;
  line-height: 0;
  padding-left: 8px !important;
}
.menu .el-submenu__triangle {
  margin-left: 8px;
  width: 8px;
  height: 6px;
}
.menu .el-submenu__fileFolder {
  margin: 0 6px 0 10px;
  width: 14px;
}

.menu .el-menu-item-group__title {
  display: flex;
  align-items: center;
  margin: 8px 0 8px 6px;
  padding-left: 8px !important;
  padding: 0;
  font-size: 14px;
  color: #212b36;
}
.menu .el-submenu__top {
  background-color: #eef1f4;
}
.menu .el-submenu__subTitle {
  color: #212b36 !important;
}
.menu .el-submenu__file {
  margin-right: 6px;
  width: 10px;
  height: 12px;
}
.menu .el-submenu .el-menu-item {
  height: auto;
  line-height: 0;
  padding-left: 65px !important;
  padding: 0;
  margin-bottom: 18px;
}
.menu .el-icon-arrow-down:before {
  content: "";
}
.search__hiddenItem .el-select {
  width: 100%;
}
.search__hiddenItem .el-option {
  z-index: 2021;
}
.table-pagination-wrapper {
  margin: 20px 20px 12px 0;
  display: flex;
  justify-content: flex-end;
}
.table-pagination-wrapper .el-pagination {
  font-weight: normal;
}
.table-pagination-wrapper .el-pagination .el-input__inner {
  border: none;
}
.table-pagination-wrapper .el-pagination__sizes {
  margin: 0;
}
.table-pagination-wrapper .el-pager li.active {
  border-radius: 5px;
  background-color: #5077aa;
  color: #fff;
}
.table-pagination-wrapper .el-pager li {
  font-size: 14px;
  color: #5077aa;
}
</style>
