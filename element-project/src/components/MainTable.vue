<template>
  <div id="body">
    <div class="content_title">
      <span>待办</span>
    </div>
    <div class="content">
      <el-aside class="el-aside">
        <el-input placeholder="请输入分类名称进行搜索">
          <template slot="append">
            <span class="append_title">搜索</span>
          </template>
        </el-input>
        <el-menu
          default-active="2"
          background-color="#ffffff"
          text-color="#212b36"
          active-text-color="#ffd04b"
          :default-openeds="openedMenuArrays"
        >
          <el-submenu class="el-submenu" index="1">
            <template slot="title">
              <img class="el-submenu__triangle" src="../assets/img/多边形 1@2X.png" />
              <img class="el-submenu__fileFolder" src="../assets/img/文件夹.png" />
              <span>分类</span>
            </template>
            <el-menu-item-group>
              <template slot="title" class="el-submenu__top">
                <img class="el-submenu__triangle" src="../assets/img/多边形 1@2X.png" />
                <img class="el-submenu__fileFolder" src="../assets/img/文件夹.png" />
                <span>一级分类</span>
              </template>
              <el-menu-item class="el-submenu__subTitle" index="1-1">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-2">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-3">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-4">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <img class="el-submenu__triangle" src="../assets/img/多边形 1@2X.png" />
                <img class="el-submenu__fileFolder" src="../assets/img/文件夹.png" />
                <span>一级分类</span>
              </template>
              <el-menu-item class="el-submenu__subTitle" index="1-5">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-6">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <img class="el-submenu__triangle" src="../assets/img/多边形 1@2X.png" />
                <img class="el-submenu__fileFolder" src="../assets/img/文件夹.png" />
                <span>一级分类</span>
              </template>
              <el-menu-item class="el-submenu__subTitle" index="1-7">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-8">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <img class="el-submenu__triangle" src="../assets/img/多边形 1@2X.png" />
                <img class="el-submenu__fileFolder" src="../assets/img/文件夹.png" />
                <span>一级分类</span>
              </template>
              <el-menu-item class="el-submenu__subTitle" index="1-9">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
              <el-menu-item class="el-submenu__subTitle" index="1-a">
                <img class="el-submenu__file" src="../assets/img/文件-2@2X.png" />
                <span class="title">二级分类名称</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="content_search">
          <div class="content_search_input">
            <img class="search_icon" src="../assets/img/搜索.png" />
            <input class="search_input" placeholder="请输入标题/环节/应用名称进行搜索" type="text" />
          </div>
          <div class="content_search_select" @click="dialogFormVisible = !dialogFormVisible">
            <img class="search_select" src="../assets/img/筛选.png" />
            <span class="select_title">筛选</span>
            <img class="search_arrow" src="../assets/img/箭头（下）@2X.png" />
          </div>
          <div :class="{'search_select_hidden':true, 'search_select_hiddenItem':dialogFormVisible}">
            <div class="select_hidden_titleBox">
              <div class="hidden_title">筛选</div>
              <img class="hidden_icon_close" src="../assets/img/关闭@2X.png" />
            </div>
            <div class="select_hidden_formBox">
              <label for="classify">分类</label>
              <div class="hidden_form_inputBox">
                <input id="classify" class="hidden_form_input" type="text" placeholder="请选择分类" />
                <img class="hidden_icon_triangle" src="../assets/img/多边形 1@2X.png" />
              </div>
              <label for="createtime">创建时间</label>
              <div class="hidden_form_inputBox">
                <input
                  id="createtime"
                  class="hidden_form_input"
                  type="text"
                  placeholder="开始时间 - 结束时间"
                />
                <img class="hidden_icon_calendar" src="../assets/img/日历@2X.png" />
              </div>
            </div>
            <div class="select_hidden_btnBox">
              <button class="hidden_btn">确定</button>
              <button class="hidden_btn">取消</button>
            </div>
          </div>
        </div>
        <el-table :data="tableDatas" border stripe style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="segment" label="环节"></el-table-column>
          <el-table-column prop="application" label="应用"></el-table-column>
          <el-table-column prop="category" label="分类"></el-table-column>
          <el-table-column v-if="tableDatas[0].state" prop="state" label="状态"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="160"></el-table-column>
          <el-table-column prop="opperation" label="操作"></el-table-column>
        </el-table>
        <div class="el-pagination-box">
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
export default {
  props: [
    'tableData'
  ],
  data () {
    return {
      openedMenuArrays: ['1'],
      tableDatas: this.tableData,
      dialogFormVisible: true,
    }
  },
  methods: {
    show(){

    }
  }
}
</script>

<style scoped>
#body {
  background-color: #f5f5f5;
  padding: 20px 30px 100px 30px;
}
.content_title {
  font-size: 26px;
  color: #212b36;
}
.content {
  display: flex;
  margin-top: 18px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px#dae0e5;
}
.el-aside {
  padding: 24px;
  border-right: 1px solid #dae0e5;
}
.append_title {
  color: #212b36;
}
.el-menu {
  border-right: 0;
}
>>> .el-submenu__title {
  margin: 20px 0 8px 0;
  height: auto;
  line-height: 0;
  padding-left: 8px !important;
}
.el-submenu__triangle {
  margin-left: 8px;
  width: 8px;
  height: 6px;
}
.el-submenu__fileFolder {
  margin: 0 6px 0 10px;
  width: 14px;
}

>>> .el-menu-item-group__title {
  display: flex;
  align-items: center;
  margin: 8px 0 8px 6px;
  padding-left: 8px !important;
  padding: 0;
  font-size: 14px;
  color: #212b36;
}
.el-submenu__top {
  background-color: #eef1f4;
}
.el-submenu__subTitle {
  color: #212b36 !important;
}
.el-submenu__file {
  margin-right: 6px;
  width: 10px;
  height: 12px;
}
.el-submenu >>> .el-menu-item {
  height: auto;
  line-height: 0;
  padding-left: 65px !important;
  padding: 0;
  margin-bottom: 18px;
}
>>> .el-icon-arrow-down:before {
  content: "";
}

.content_search {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 82px;
}
.content_search .content_search_input,
.content_search .content_search_select {
  display: flex;
  align-items: center;
  border-left: 1px solid #dae0e5;
  cursor: pointer;
}
.content_search .content_search_input .search_icon {
  margin-left: 12px;
  width: 14px;
  height: 14px;
}
.content_search .content_search_input .search_input {
  margin: 0 42px 0 12px;
  border: none;
  outline: none;
  color: rgba(145, 158, 171, 1);
  font-size: 14px;
}
.content_search .content_search_select .search_select {
  margin-left: 12px;
  width: 16px;
  height: 16px;
}
.content_search .content_search_select .select_title {
  margin-left: 8px;
  font-size: 14px;
  color: rgba(33, 43, 54, 1);
}
.content_search .content_search_select .search_arrow {
  margin: 0 12px 0 8px;
  width: 10px;
  height: 6px;
}
>>> .el-table--border {
  border: 0;
}
>>> .el-table--group,
.el-table--border {
  border-top: 1px solid #dae0e5;
}
>>> .el-table--border::after,
.el-table--group::after {
  width: 0;
}
>>> .el-table thead {
  font-size: 12px;
  font-weight: normal;
  background-color: #637381;
}
>>> .el-table th,
.el-table tr {
  background-color: #eef1f4;
}
>>> .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #f5f7fa;
}
>>> .el-table td {
  padding: 20px 0;
}
>>> .el-table th.is-leaf {
  border-color: #dae0e5 !important;
}
>>> .el-table--border th {
  border-right: 1px solid #dae0e5 !important;
}
.el-pagination-box {
  margin: 20px 20px 12px 0;
  display: flex;
  justify-content: flex-end;
}
>>> .el-pagination {
  font-weight: normal;
}
>>> .el-pagination .el-input__inner {
  border: none;
}
>>> .el-pagination__sizes {
  margin: 0;
}
>>> .el-pager li.active {
  border-radius: 5px;
  background-color: #5077aa;
  color: #fff;
}
>>> .el-pager li {
  font-size: 14px;
  color: #5077aa;
}
.search_select_hiddenItem {
  visibility: hidden;
}
.search_select_hidden {
  position: absolute;
  top: 84px;
  background-color: #fff;
  box-shadow: -2px 2px 2px rgba(63, 63, 68, 0.16);
  width: 350px;
  z-index: 2020;
}
.select_hidden_titleBox {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 18px;
}
.hidden_title {
  font-weight: bold;
  font-size: 16px;
  color: rgba(33, 43, 54, 1);
}
.hidden_icon_close {
  width: 12px;
  height: 12px;
}
.select_hidden_formBox {
  margin-top: 33px;
  padding: 0 24px;
  font-size: 14px;
}
.select_hidden_formBox label {
  display: block;
  color: rgba(33, 43, 54, 1);
  margin-bottom: 8px;
}
.hidden_form_inputBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  height: 36px;
  border: 1px solid rgba(196, 205, 213, 1);
  border-radius: 5px;
}
.hidden_form_input {
  border: none;
  margin-left: 10px;
  color: rgba(145, 158, 171, 1);
}
.hidden_icon_triangle {
  margin-right: 12px;
  width: 8px;
  height: 4px;
}
.hidden_icon_calendar {
  margin-right: 12px;
  width: 16px;
  height: 16px;
}
.select_hidden_btnBox {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgba(217, 217, 217, 1);
  padding: 16px 24px 16px 0;
}
.hidden_btn {
  padding: 8px 22px;
  margin-left: 10px;
  background-color: #fff;
  outline: none;
  border: 1px solid rgba(196, 205, 213, 1);
  border-radius: 4px;
}
.hidden_btn:nth-child(1) {
  background-color: #0270e0;
  color: #fff;
}
</style>

