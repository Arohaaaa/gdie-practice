<template>
  <div id="table">
    <div class="content_table">
      <table>
        <tr class="table-header">
          <td>{{data[0].title}}</td>
          <td>{{data[0].segment}}</td>
          <td>{{data[0].application}}</td>
          <td>{{data[0].category}}</td>
          <td v-if="data[0].state">{{data[0].state}}</td>
          <td>{{data[0].handleTime}}</td>
          <td>{{data[0].operation}}</td>
        </tr>
        <tr v-for="item in data.slice(1)">
          <td>{{item.title}}</td>
          <td>{{item.segment}}</td>
          <td>{{item.application}}</td>
          <td>{{item.category}}</td>
          <td v-if="data[0].state">
            <span :class="[item.state=='已处理'?'td_handled':'td_abolish']">{{item.state}}</span>
          </td>
          <td>{{item.handleTime}}</td>
          <td @click="goto(item.url)">{{item.operation}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'tableData'
  ],
  data () {
    return {
      data: this.tableData
    }
  },
  methods: {
    goto(url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.content_table table .table-header {
  background-color: #eef1f4 !important;
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
  background-color: #f5f7fa;
}
.content_table table tr:nth-child(even) {
  background-color: #ffffff;
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