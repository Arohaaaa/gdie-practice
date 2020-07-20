<template>
  <div id="page-table">
    <div class="title">
      <span>已办</span>
    </div>
    <div class="content-table">
      <el-aside>
        <el-input placeholder="请输入分类名称进行搜索" v-model="categorySearch">
          <template slot="append">
            <span class="search-input">搜索</span>
          </template>
        </el-input>
        <div class="tree">
          <el-tree
            :data="data"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>
                <i :class="['iconfont', data.icon]"></i>
                {{ node.label }}
              </span>
            </span>
          </el-tree>
        </div>
      </el-aside>
      <el-main>
        <div class="table-search-wrapper">
          <div class="search-input-box">
            <img class="icon-search" src="../assets/img/搜索.png" />
            <input placeholder="请输入标题/环节/应用名称进行搜索" type="text" />
          </div>
          <div
            class="search-select-box"
            @click="dialogFormVisible = !dialogFormVisible"
          >
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
                <el-select
                  v-model="categoryValue"
                  clearable
                  placeholder="请选择分类"
                >
                  <el-option
                    v-for="item in categories"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="form__input-box">
                <el-select
                  v-model="stateValue"
                  clearable
                  placeholder="请选择状态"
                >
                  <el-option
                    v-for="item in statements"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <label for="createtime">创建时间</label>
              <div class="form__input-box">
                <el-date-picker
                  v-model="createValue"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
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
              <input
                type="number"
                autocomplete="off"
                min="1"
                max="100"
                class="el-input__inner"
              />
            </div>
            跳转
          </span>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import "../assets/css/table.css";
import Table from "../components/Table.vue";
export default {
  data() {
    return {
      categorySearch: "",
      data: [
        {
          id: 1,
          label: "分类",
          icon: "icon-wenjianjia-copy",
          children: [
            {
              id: 2,
              label: "一级分类",
              icon: "icon-wenjianjia-copy",
              children: [
                {
                  id: 6,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 7,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 8,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 9,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
              ],
            },
            {
              id: 3,
              label: "一级分类",
              icon: "icon-wenjianjia-copy",
              children: [
                {
                  id: 10,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 11,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
              ],
            },
            {
              id: 4,
              label: "一级分类",
              icon: "icon-wenjianjia-copy",
              children: [
                {
                  id: 12,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 13,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
              ],
            },
            {
              id: 5,
              label: "一级分类",
              icon: "icon-wenjianjia-copy",
              children: [
                {
                  id: 14,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
                {
                  id: 15,
                  label: "二级分类名称",
                  icon: "icon-wenjian",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      dialogFormVisible: true,
      categories: [
        {
          value: "选项1",
          label: "分类一",
        },
        {
          value: "选项2",
          label: "分类二",
        },
      ],
      statements: [
        {
          value: "选项1",
          label: "状态一",
        },
        {
          value: "选项2",
          label: "状态二",
        },
      ],
      categoryValue: "",
      stateValue: "",
      createValue: "",
      tableData: [
        {
          title: "标题",
          segment: "环节",
          application: "应用",
          category: "分类",
          state: "状态",
          handleTime: "处理时间",
          operation: "操作",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "采购审批",
          segment: "领导审批",
          application: "采购系统",
          category: "市场",
          state: "已废弃",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "采购审批",
          segment: "领导审批",
          application: "采购系统",
          category: "市场",
          state: "已废弃",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "采购审批",
          segment: "领导审批",
          application: "采购系统",
          category: "市场",
          state: "已废弃",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已废弃",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
        {
          title: "采购审批",
          segment: "领导审批",
          application: "采购系统",
          category: "市场",
          state: "已处理",
          handleTime: "2020-04-22",
          operation: "查看",
          url: "/done/donedetail",
        },
      ],
    };
  },
  methods: {
    viewDetail(url) {
      this.$router.push(url);
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
  components: {
    "v-table": Table,
  },
};
</script>

<style scoped></style>
