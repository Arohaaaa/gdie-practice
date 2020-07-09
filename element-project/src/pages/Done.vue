<template>
  <div>
    <maintable :tableData="tableData"></maintable>
  </div>
</template>

<script>
import MainTable from "../components/MainTable.vue";
export default {
  data() {
    return {
      tableData: [
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
        {
          title: "请假审批",
          segment: "领导审批",
          application: "OA系统",
          category: "内务",
          state: "已处理",
          createTime: "2020-04-22 17:50",
          opperation: "查看",
        },
      ],
    };
  },
  components: {
    maintable: MainTable,
  },
};
</script>
