<template>
  <div class="wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item class="font--normal" to="/task"
        >创建任务</el-breadcrumb-item
      >
      <el-breadcrumb-item class="font--active" to="/task"
        >创建督察任务</el-breadcrumb-item
      >
    </el-breadcrumb>

    <div class="baseInfo--wrapper">
      <div class="item-title">基本信息</div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">标题</span>
        <div class="baseInfo__input--taskContent baseInfo__input--undefined">
          <textarea type="text" placeholder="请输入标题  (100字以内)" />
        </div>
      </div>
      <div class="baseInfo__subItem">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">
                任务专题
                <span class="baseInfo__subItem--link">管理</span>
              </span>
              <el-select filterable value placeholder="请选择"></el-select>
            </div>
          </el-col>
          <el-col :span="6">
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
                v-model="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">分管领导</span>
              <el-select filterable value placeholder="请选择"></el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">督办周期</span>
              <el-select filterable value placeholder="请选择"></el-select>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top:30px">
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">主办单位</span>
              <el-input
                placeholder="请输入内容"
                readonly
                class="input--hostUnit"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="title-input-box">
              <el-checkbox v-model="meetUnitChecked">
                <span class="baseInfo__subItem-title">会办单位</span>
              </el-checkbox>
              <el-input
                placeholder="无"
                :disabled="true"
                class="input--meetUnit"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">任务内容</span>
        <div class="baseInfo__input--taskContent baseInfo__input--undefined">
          <textarea type="text" placeholder="请输入任务内容  (500字以内)" />
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
    <div class="baseInfo--wrapper">
      <div class="item-title">基本信息</div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">标题</span>
        <div class="baseInfo__input--taskContent">
          <textarea
            type="text"
            v-model="inputValue"
            placeholder="请输入标题  (100字以内)"
          />
        </div>
      </div>
      <div class="baseInfo__subItem">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">
                任务专题
                <span class="baseInfo__subItem--link">管理</span>
              </span>
              <el-select
                filterable
                value="梅州调研"
                placeholder="请选择"
              ></el-select>
            </div>
          </el-col>
          <el-col :span="6">
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
                v-model="date"
                placeholder="选择日期"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="title-input-box">
              <span class="baseInfo__subItem-title">分管领导</span>
              <el-select
                filterable
                value="徐睿生"
                placeholder="请选择"
              ></el-select>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">任务内容</span>
        <div class="baseInfo__input--taskContent">
          <textarea
            type="text"
            v-model="textareaValue"
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
      <div class="addition">
        <div class="addition__title">
          <span class="addition__title--left">附件标题</span>
          <span class="addition__title--right">操作</span>
        </div>
        <ul class="addition__list">
          <li class="addition__list-item">
            <div class="addition__list--left">
              <i class="addition__file--pdf">P</i>
              <span class="addition__item-title addition__item-title--uploading"
                >会议纪要[2018]6号：专题会议纪要（研究部署安全生产….pdf</span
              >
              <span class="addition__upload-progress">(上传中…56%)</span>
            </div>
            <div class="addition__list--right">
              <span>取消</span>
            </div>
          </li>
          <li class="addition__list-item">
            <div class="addition__list--left">
              <i class="addition__file--pdf">P</i>
              <span class="addition__item-title"
                >会议纪要[2018]6号：专题会议纪要（研究部署安全生产….pdf</span
              >
              <span class="addition__fileSize">(1.46 MB)</span>
            </div>
            <div class="addition__list--right">
              <span>删除</span> ·
              <span>查看</span>
            </div>
          </li>
          <li class="addition__list-item">
            <div class="addition__list--left">
              <i class="addition__file--pdf">P</i>
              <span class="addition__item-title"
                >会议纪要[2018]6号：专题会议纪要（研究部署安全生产….pdf</span
              >
              <span class="addition__fileSize">(1.46 MB)</span>
            </div>
            <div class="addition__list--right">
              <span>删除</span> ·
              <span>查看</span>
            </div>
          </li>
          <li class="addition__list-item">
            <div class="addition__list--left">
              <i class="addition__file--pdf">P</i>
              <span class="addition__item-title"
                >会议纪要[2018]6号：专题会议纪要（研究部署安全生产….pdf</span
              >
              <span class="addition__fileSize">(1.46 MB)</span>
            </div>
            <div class="addition__list--right">
              <span>删除</span> ·
              <span>查看</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="subTask--wrapper">
      <div class="item-title">子任务</div>
      <div class="addItem--box">
        <div v-if="subTaskCom.length == 0" class="addItem--placeholder">
          <div class="addItem-img--wrapper">
            <img
              src="../assets/img/任务.png"
              alt="子任务"
              class="addItem__placehoder"
            />
          </div>
          <span class="addItem__title">暂无子任务</span>
          <span class="addItem__tips">您最多可添加10个子任务</span>
          <button class="addItem__btn" @click="addTask">添加子任务</button>
        </div>
        <div v-else class="addItem">
          <template v-for="(item, key) in subTaskCom" :v-key="item.id">
            <v-addtask :item="item" @delete-com="deleteTask"></v-addtask>
          </template>
          <button class="addItem__btn addItem__btn--added" @click="addTask">
            添加子任务
          </button>
          <span class="addItem__tips--added">
            <img
              class="addItem__tips-icon"
              src="../assets/img/提示.png"
            />最多可添加10个子任务
          </span>
        </div>
      </div>
    </div>
    <div class="copy--wrapper">
      <div class="copy__title-box">
        <span class="copy__title font--normal">抄送</span>
      </div>
      <div class="copy__select-box">
        <button class="copy__select-btn font--normal">选择人员</button>
        <input
          type="text"
          class="copy__select-input"
          placeholder="选择后将于此处显示已选人员信息"
        />
      </div>
    </div>
    <div class="btn--wrapper">
      <button class="btn">送立项审核</button>
      <button class="btn">送办理</button>
      <button class="btn">存为草稿</button>
      <button class="btn">取消</button>
    </div>
  </div>
</template>

<script>
import "../assets/css/task.css";
import AddTask from "../components/AddTask.vue";
export default {
  data() {
    return {
      limitDateChecked: false,
      meetUnitChecked: false,
      subTaskCom: [],
      inputValue: "准备陈良贤同志到汕尾开展定点联系工作调研的材料",
      textareaValue:
        "副省长许瑞生到梅州市及五华县开展定点联系工作调研，深入田间地头、工厂车间、重点项目建设现场和贫困户家中，实地调研乡村振兴、脱贫攻坚、企业复工复产等工作情况，认真听取基层、企业、群众反映的困难和诉求。他强调，要全力做好“六稳”工作、落实“六保”任务，实实在在为企业解决困难，推动各类企业和重点项目加快复工复产，努力增加就业岗位。",
      date: "",
    };
  },
  methods: {
    addTask() {
      this.subTaskCom.push({ id: {} });
    },
    deleteTask(val) {
      this.subTaskCom.splice(val.id, 1);
    },
  },
  components: {
    "v-addtask": AddTask,
  },
};
</script>
