<template>
  <div id="task">
    <div class="task--wrapper">
      <div class="task-title--box">
        <span>任务一</span>
        <button class="task-title__btn font--normal" @click="remove">
          <img class="task-title__icon" src="../assets/img/删 除 .png" />
          <span>删除</span>
        </button>
      </div>
      <div class="content--wrapper">
        <div class="baseInfo__subItem">
          <span class="baseInfo__subItem-title">任务标题</span>
          <div class="baseInfo__input--taskTitle">
            <input
              type="text"
              v-model="taskInfo.title"
              placeholder="输入任务标题..."
            />
          </div>
        </div>
        <div class="baseInfo__subItem">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="title-input-box">
                <span class="baseInfo__subItem-title">督办周期</span>
                <el-select
                  filterable
                  v-model="taskInfo.superViseCycle"
                  placeholder="请选择"
                  class="superviseCycle"
                ></el-select>
                <span class="baseInfo__subItem-tips">{{
                  taskInfo.superViseTips
                    ? taskInfo.superViseTips
                    : "选择后显示督办周期"
                }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="title-input-box">
                <span class="baseInfo__subItem-title">主办单位</span>
                <el-input
                  placeholder="请选择"
                  v-model="taskInfo.hostUnit"
                  readonly
                  class="input--hostUnit"
                ></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top:30px">
            <el-col :span="12">
              <div class="title-input-box">
                <el-checkbox v-model="limitDateChecked">
                  <span class="baseInfo__subItem-title">限办时间</span>
                </el-checkbox>
                <el-input
                  v-if="limitDateChecked"
                  placeholder="无"
                  :disabled="true"
                  class="input--limitDate"
                ></el-input>
                <el-date-picker
                  v-else
                  :clearable="false"
                  type="date"
                  v-model="taskInfo.limitDate"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="title-input-box">
                <el-checkbox v-model="meetUnitChecked">
                  <span class="baseInfo__subItem-title">会办单位</span>
                </el-checkbox>
                <el-input
                  placeholder="无"
                  v-model="taskInfo.meetUnit"
                  :disabled="true"
                  class="input--meetUnit"
                ></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="baseInfo__subItem">
          <span class="baseInfo__subItem-title">任务内容</span>
          <div class="baseInfo__input--taskContent">
            <textarea
              type="text"
              v-model="taskInfo.content"
              placeholder="请输入任务内容  (500字以内)"
            />
          </div>
        </div>
        <div class="baseInfo__subItem">
          <span class="baseInfo__subItem-title">相关文件</span>
          <div class="baseInfo__subItem-upload">
            <span class="upload-introduction">
              将文件拖拽至此区域 或
              <span class="upload">点击上传</span>
            </span>
            <span class="upload-tips"
              >支持格式: doc / docx / xls / xlsx / ppt / pptx / wps / pdf /
              ofd</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/task.css";
export default {
  props: ["item"],
  data() {
    return {
      limitDateChecked: false,
      meetUnitChecked: false,
      taskInfo: {
        title: "汕尾：奋力建成沿海经济带亮丽明珠（内容展开样式）",
        superViseCycle: "按季度督办",
        superViseTips:
          "每季度第1个月28日、第2个月20日、第3个月30日（含）前反馈",
        hostUnit: "广州市公安局",
        limitDate: "2020-06-16",
        meetUnit: "",
        content:
          "副省长许瑞生到梅州市及五华县开展定点联系工作调研，深入田间地头、工厂车间、重点项目建设现场和贫困户家中，实地调研乡村振兴、脱贫攻坚、企业复工复产等工作情况，认真听取基层、企业、群众反映的困难和诉求。他强调，要全力做好“六稳”工作、",
      },
    };
  },
  methods: {
    remove() {
      this.$emit("delete-com", this.item);
    },
  },
};
</script>

<style scoped>
.task--wrapper {
  margin: 30px 0;
  border: 1px solid #dae0e5;
  border-radius: 4px;
}
.task-title--box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 48px;
  font-family: "PingFangSC-Regular";
  background: #eef1f4;
}
.task-title__btn {
  display: flex;
  align-items: center;
  width: 74px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #c4cdd5;
  border-radius: 4px;
  outline: none;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
}
.task-title__icon {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}
.content--wrapper {
  padding: 16px 20px;
}
</style>
