<template>
  <div>
    <div class="aside">
      <el-aside>
        <el-input placeholder="请输入分类名称进行搜索">
          <template slot="append">
            <span class="search-input">搜索</span>
          </template>
        </el-input>
        <div class="menu">
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
                <template slot="title">
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
        </div>
      </el-aside>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openedMenuArrays: ["1"]
    }
  }
}
</script>

<style>
.aside .el-aside {
  padding: 24px;
}
.aside .search-input {
  color: #212b36;
}
.aside .el-input-group__append {
  padding: 8px 14px;
  background-color: #eef1f4;
  border-color: #c4cdd5;
}
.content .el-main {
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
</style>