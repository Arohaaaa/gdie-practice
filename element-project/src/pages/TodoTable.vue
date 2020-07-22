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
          @change="searchClassify"
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
            <i class="iconfont icon-wenjian"></i>
            <span class="typeName">{{ item.typeName }}</span>
          </li>
        </div>
      </el-aside>
      <el-main>
        <div class="table-search-wrapper">
          <div class="search-input-box">
            <img class="icon-search" src="../assets/img/搜索.png" />
            <input
              placeholder="请输入标题/环节/应用名称进行搜索"
              v-model="searchInfo"
              type="text"
              @change="searchByInfo"
            />
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
              <img
                class="icon-close pointer"
                src="../assets/img/关闭@2X.png"
                @click="dialogFormVisible = true"
              />
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
                  v-model="dateRange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd HH:mm:ss"
                ></el-date-picker>
              </div>
            </div>
            <div class="hiddenItem-btn-box">
              <button class="btn" @click="submitSelect()">确定</button>
              <button class="btn" @click="dialogFormVisible = true">
                取消
              </button>
            </div>
          </div>
        </div>
        <div class="table">
          <el-table
            stripe
            v-loading="loading"
            class="el-table"
            v-if="tableShow"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column label="标题">
              <template slot-scope="scope">
                <span>{{ scope.row.instName }}</span>
              </template>
            </el-table-column>
            <el-table-column label="环节">
              <template slot-scope="scope">{{ scope.row.nodeName }}</template>
            </el-table-column>
            <el-table-column label="应用">
              <template slot-scope="scope">{{
                scope.row.applicationName
              }}</template>
            </el-table-column>
            <el-table-column label="分类">
              <template slot-scope="scope">{{ scope.row.typeName }}</template>
            </el-table-column>
            <el-table-column label="处理时间" width="180">
              <template slot-scope="scope">{{ scope.row.createTime }}</template>
            </el-table-column>
            <el-table-column label="操作" width="60">
              <template slot-scope="scope">
                <span @click="viewDetail(scope.row.serialNumber)">查看</span>
              </template>
            </el-table-column>
          </el-table>
          <div v-else class="noData">
            <img src="../assets/img/noData2.6dcf2e3.png" />
            <span>暂无数据</span>
          </div>
        </div>
        <div class="table-pagination-wrapper">
          <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :page-sizes="[5, 10, 30, 50]"
            :page-size="pageSize"
            :pager-count="5"
            :current-page="currentPage"
            :total="total"
            layout="sizes, prev, pager, next"
          ></el-pagination>
          <!-- 存疑 -->
          <span class="el-pagination__jump">
            <div class="el-input el-pagination__editor is-in-pagination">
              <input
                type="number"
                @blur="jumpTo"
                v-model="toPage"
                class="el-input__inner"
              />
            </div>
            <span class="pointer" @click="jumpTo">跳转</span>
          </span>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
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
      typeKey: "",
      // 分类树 end
      // 筛选 start
      searchInfo: "",
      dialogFormVisible: true,
      categories: [
        {
          value: "default",
          label: "默认分类",
        },
        {
          value: "level2",
          label: "level2",
        },
      ],
      categoryValue: "",
      dateRange: "",
      // 筛选 end
      // table start
      tableData: [],
      tableShow: true,
      loading: false,
      // table end
      // 分页栏 start
      currentPage: 1,
      pageSize: 5,
      total: 0,
      toPage: "",
      // 分页栏 end
    };
  },
  methods: {
    // 搜索
    searchClassify() {
      if (this.categorySearch.length == 0) {
        this.showCom = true;
        return;
      }
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
    // 默认分类菜单点击事件处理
    getTableListFromTree(data) {
      this.typeKey = data.typeKey;
    },
    // 搜索后的分类菜单点击事件处理
    getTableListFromSearchTree(typeKey) {
      this.typeKey = typeKey;
    },
    searchByInfo() {
      this.fuzzyParam = this.searchInfo;
    },
    submitSelect() {
      if (Array.isArray(this.dateRange)) {
        this.sendRequestForTable({
          typeKey: this.categoryValue,
          createTimeStart: this.dateRange[0],
          createTimeEnd: this.dateRange[1],
        });
      } else {
        this.sendRequestForTable({
          typeKey: this.categoryValue,
        });
      }
      this.dialogFormVisible = true;
    },
    // 查看详情
    viewDetail(serialNumber) {
      this.$router.push({
        name: "tododetail",
        params: { serialNumber: serialNumber },
      });
    },
    sizeChange(val) {
      this.pageSize = val;
    },
    currentChange(val) {
      this.currentPage = val;
    },
    jumpTo() {
      if (this.toPage > this.total / this.pageSize) {
        this.toPage = Math.ceil(this.total / this.pageSize);
      }
      this.currentPage = this.toPage;
    },
    // 获取table数据
    sendRequestForTable({
      typeKey = this.categoryValue || this.typeKey,
      limit = this.pageSize,
      page = this.currentPage,
      fuzzyParam = this.searchInfo,
      createTimeStart = typeof this.dateRange == "object"
        ? this.dateRange[0]
        : undefined,
      createTimeEnd = typeof this.dateRange == "object"
        ? this.dateRange[1]
        : undefined,
    } = {}) {
      this.loading = true;
      let that = this;
      ESTAxios({
        url: "/workitem/pages",
        data: {
          typeKey: typeKey,
          limit: limit,
          page: page,
          fuzzyParam: fuzzyParam,
          createTimeStart: createTimeStart,
          createTimeEnd: createTimeEnd,
        },
        success: function(res) {
          console.log(res);
          //请求成功且正常返回数据
          if (res.data.length > 0) {
            that.$notify({
              message: "请求成功，返回数据正常",
              position: "top-right",
              duration: 5000,
            });

            that.loading = false;
            that.tableData = res.data;
            that.tableShow = true;
          }
          // 请求成功但是无返回数据，原因是由于上一次请求成功后返回的页码page超出
          // 了本次请求返回数据时的页码而无查询不到，但是count正常返回，因此通过
          // res.count来做判断，并且重新设置页码为1从而重新触发请求。
          else if (res.count > 0) {
            that.$notify({
              message:
                "请求成功，因页码超出范围无匹配数据，正重新设置页码并发送请求",
              position: "top-right",
              duration: 5000,
            });
            that.currentPage = 1;
          }
          // 请求成功但是查询不到数据。
          else {
            that.$notify({
              message: "请求成功，无匹配数据",
              position: "top-right",
              duration: 5000,
            });
            that.tableShow = false;
          }
          that.total = res.count;
        },
      });
    },
  },
  mounted() {
    this.sendRequestForTable();
  },
  watch: {
    typeKey: function() {
      this.sendRequestForTable({});
    },
    pageSize: function() {
      this.sendRequestForTable({});
    },
    currentPage: function() {
      this.sendRequestForTable({});
    },
    searchInfo: function() {
      this.sendRequestForTable({});
    },
  },
};
</script>
