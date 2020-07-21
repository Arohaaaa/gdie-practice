<template>
  <div id="page-table">
    <div class="title">
      <span>待办</span>
    </div>
    <div class="content-table">
      <el-aside>
        <el-input
          placeholder="请输入分类名称进行搜索"
          v-model="categorySearch"
          clearable
          @clear="showCom = true"
        >
          <template slot="append">
            <span class="search-input" @click="searchClassify">搜索</span>
          </template>
        </el-input>
        <div v-if="showCom" class="tree">
          <el-tree
            :data="defaultData"
            :props="defaultProps"
            :render-after-expand="true"
            :expand-on-click-node="false"
            :lazy="true"
            :load="loadTreeNode"
            @node-click="getTableListFromTree"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>
                <i :class="['iconfont', data.icon]"></i>
                {{ node.label }}
              </span>
            </span>
          </el-tree>
        </div>
        <div v-else class="searchTree">
          <li
            v-for="item in searchTreeData"
            class="resultNode"
            @click="getTableListFromSearchTree(item.typeKey)"
          >
            <i class="iconfont icon-wenjian"></i
            ><span class="typeName">{{ item.typeName }}</span>
          </li>
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
        <div class="table">
          <el-table v-if="tableShow" :data="tableData" style="width: 100%">
            <el-table-column label="标题" width="180">
              <template slot-scope="scope"
                ><span>{{ scope.row.instName }}</span></template
              >
            </el-table-column>
            <el-table-column label="环节" width="180">
              <template slot-scope="scope">{{ scope.row.nodeName }} </template>
            </el-table-column>
            <el-table-column label="应用">
              <template slot-scope="scope"
                >{{ scope.row.applicationName }}
              </template>
            </el-table-column>
            <el-table-column label="分类">
              <template slot-scope="scope"> {{ scope.row.typeName }}</template>
            </el-table-column>
            <el-table-column label="处理时间">
              <template slot-scope="scope"
                >{{ scope.row.createTime }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope"> 查看</template>
            </el-table-column>
          </el-table>
          <div v-else class="noData">
            <img src="../assets/img/noData2.6dcf2e3.png" /><span>暂无数据</span>
          </div>
        </div>
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
import { ESTAxios } from "../plugins/public";
import "../assets/css/table.css";
export default {
  data() {
    return {
      categorySearch: "",
      // 分类树 start
      defaultData: [
        {
          id: "",
          label: "分类",
          icon: "icon-wenjianjia-copy",
          children: [],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      level: "",
      searchTreeData: [],
      showCom: true,
      // 分类树 end
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
      categoryValue: "",
      createValue: "",
      tableData: [],
      tableShow: true,
    };
  },
  methods: {
    viewDetail(url) {
      this.$router.push(url);
    },
    // 搜索
    searchClassify() {
      var that = this;
      let typeName = this.categorySearch;
      ESTAxios({
        url: "/type/search",
        data: {
          typeName,
        },
        success: function(res) {
          that.showCom = false;
          that.searchTreeData = res.data;
        },
      });
    },
    // 懒加载，初次执行后点击展开节点才会执行
    loadTreeNode(node, resolve) {
      this.level = node.level;
      if (node.level == 0) {
        return resolve(this.defaultData);
      } else {
        this.getTreeChildList(node.data.id, resolve);
      }
    },
    // 获取分类树子集
    getTreeChildList(id, resolve) {
      let that = this;
      let params = { parentId: id };
      ESTAxios({
        url: "/type/tree",
        data: params,
        success: function(res) {
          let childDataList = that.handleTreeChildList(res.data);
          resolve(childDataList);
        },
      });
    },
    // 处理分类树数据
    handleTreeChildList(data) {
      let icon = "";
      let childDataList = [];
      if (this.level == 2) {
        icon = "icon-wenjian";
      } else {
        icon = "icon-wenjianjia-copy";
      }
      for (let i = 0; i < data.length; i++) {
        var { id, typeName, typeKey } = data[i];
        childDataList.push({
          id: id,
          label: typeName,
          icon: icon,
          typeKey: typeKey,
        });
      }
      return childDataList;
    },
    getTableListFromTree(data) {
      this.sendRequestForTable(data.typeKey);
    },
    getTableListFromSearchTree(typeKey) {
      this.sendRequestForTable(typeKey);
    },
    sendRequestForTable(typeKey) {
      let that = this;
      ESTAxios({
        url: "/workitem/pages",
        data: {
          typeKey: typeKey,
        },
        success: function(res) {
          if (res.data.length > 0) {
            that.tableData = res.data;
            that.tableShow = true;
          } else {
            that.tableData = [];
            that.tableShow = false;
          }
        },
      });
    },
  },
  mounted() {
    this.sendRequestForTable();
  },
};
</script>
