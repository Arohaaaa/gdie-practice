<template>
  <div class="wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item class="font--normal" to="/task">创建任务</el-breadcrumb-item>
      <el-breadcrumb-item class="font--active" to="/task">创建督察任务</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="baseInfo--wrapper">
      <div class="item-title">基本信息</div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">标题</span>
        <div class="baseInfo__subItem-input">
          <input type="text" placeholder="请输入标题  (100字以内)" />
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
              <el-input placeholder="无" :disabled="true" class="input--limitDate"></el-input>
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
              <el-input placeholder="请输入内容" readonly class="input--hostUnit"></el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="title-input-box">
              <el-checkbox v-model="meetUnitChecked">
                <span class="baseInfo__subItem-title">会办单位</span>
              </el-checkbox>
              <el-input placeholder="无" :disabled="true" class="input--meetUnit"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">任务内容</span>
        <div class="baseInfo__subItem-input">
          <input type="text" placeholder="请输入任务内容  (500字以内)" />
        </div>
      </div>
      <div class="baseInfo__subItem">
        <span class="baseInfo__subItem-title">相关文件</span>
        <div class="baseInfo__subItem-upload">
          <span class="upload-introduction">
            将文件拖拽至此区域 或
            <span class="upload">点击上传</span>
          </span>
          <span class="upload-tips">支持格式: doc / docx / xls / xlsx / ppt / pptx / wps / pdf / ofd</span>
        </div>
      </div>
    </div>
    <div class="subTask--wrapper">
      <div class="item-title">子任务</div>
      <div class="addItem--box">
        <div class="addItem-img--wrapper">
          <img src="../assets/img/任务.png" alt="子任务" class="addItem__placehoder" />
        </div>
        <span class="addItem__title">暂无子任务</span>
        <span class="addItem__tips">您最多可添加10个子任务</span>
        <button class="addItem__btn">添加子任务</button>
      </div>
    </div>
    <div class="copy--wrapper">
      <div class="copy__title-box">
        <span class="copy__title font--normal">抄送</span>
      </div>
      <div class="copy__select-box">
        <button class="copy__select-btn font--normal">选择人员</button>
        <input type="text" class="copy__select-input" placeholder="选择后将于此处显示已选人员信息" />
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
export default {
  data () {
    return {
      limitDateChecked: false,
      meetUnitChecked: false
    }
  }
}
</script>

<style scoped>
.wrapper {
  background: #f5f5f5;
  padding: 30px;
}
.baseInfo--wrapper,
.subTask--wrapper,
.copy--wrapper {
  margin-bottom: 30px;
  background: #fff;
  border-radius: 4px;
}
.baseInfo--wrapper {
  margin-top: 25px;
  box-shadow: 0 0 4px 0 rgba(63, 63, 68, 0.15);
}
.baseInfo--wrapper,
.subTask--wrapper {
  padding: 30px;
}
.subTask--wrapper,
.copy--wrapper {
  border: 1px solid #dae0e5;
  box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15);
}
.item-title {
  display: flex;
  align-content: center;
  padding-left: 15px;
  line-height: 26px;
  font-family: "PingFangSC-Medium";
  font-weight: 600;
  font-size: 18px;
  color: #2e3133;
}
.item-title::before {
  content: "";
  position: relative;
  left: -12px;
  display: inline-block;
  width: 3px;
  height: 24px;
  background-image: linear-gradient(-59deg, #5c99f5 0%, #4a61e7 100%);
}

/* 基本信息 */
.baseInfo__subItem {
  margin-top: 30px;
}
.baseInfo__subItem-title {
  display: block;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #212b36;
}
.baseInfo__subItem--link {
  color: #0270e0;
  cursor: pointer;
}
.baseInfo__subItem-input {
  height: 62px;
  padding: 8px 0 0 8px;
  background: #f9fafb;
  border: 1px solid #c4cdd5;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.25),
    inset 0 1px 2px 0 rgba(102, 113, 123, 0.21);
}
.baseInfo__subItem-input input {
  display: flex;
  align-items: flex-start;
  width: 80%;
  background: transparent;
  outline: none;
  border: none;
}
.baseInfo__subItem-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: #ffffff;
  border: 1px dashed #0270e0;
  border-radius: 2px;
}
.baseInfo__subItem-upload .upload-introduction {
  line-height: 22px;
  font-size: 14px;
  color: #3e5c80;
}
.baseInfo__subItem-upload .upload {
  line-height: 22px;
  font-size: 14px;
  color: #0079e2;
  cursor: pointer;
}
.baseInfo__subItem-upload .upload-tips {
  line-height: 16px;
  font-size: 12px;
  color: #3e5c80;
}
.title-input-box {
}

/* 子任务 */
.addItem--box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 290px;
  margin: 0 auto;
}
.addItem-img--wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 160px;
}
.addItem__placehoder {
  width: 80px;
  height: 80px;
}
.addItem__title {
  margin-bottom: 4px;
  font-family: "PingFangSC-Medium";
  line-height: 26px;
  font-size: 16px;
  color: #2e3133;
}
.addItem__tips {
  margin-bottom: 22px;
  font-family: "PingFangSC-Medium";
  line-height: 22px;
  font-size: 12px;
  color: #5c6166;
}
.addItem__btn {
  position: relative;
  width: 118px;
  height: 36px;
  padding-left: 32px;
  border: 1px solid #c4cdd5;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
}
.addItem__btn::before {
  content: "+";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 14px;
  font-size: 26px;
  color: #0270e0;
}
/* 抄送 */
.copy--wrapper {
  padding: 20px 30px;
}
.copy__title-box {
  margin-bottom: 10px;
}
.copy__title {
  font-family: "PingFangSC-Medium";
}
.copy__select-box {
  display: flex;
}
.copy__select-btn {
  width: 106px;
  height: 36px;
  margin-right: 16px;
  text-align: center;
  font-family: "PingFangSC-Medium";
  border-radius: 4px;
  border: 1px solid #dae0e5;
  outline: none;
  background: #fcfcfd;
}
.copy__select-input {
  flex-grow: 1;
  padding-left: 10px;
  line-height: 20px;
  color: #919eab;
  border: 1px solid #c4cdd5;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.25),
    inset 0 1px 2px 0 rgba(102, 113, 123, 0.21);
  outline: none;
  background: #ffffff;
}
/* 按钮 */
.btn--wrapper .btn {
  width: 96px;
  height: 36px;
  margin-right: 16px;
  padding: 0;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  border: none;
  border-radius: 4px;
  outline: none;
}
.btn--wrapper .btn:nth-child(-n + 2) {
  background: #0270e0;
  color: #fff;
}
.btn--wrapper .btn:nth-child(n + 3) {
  background: #fff;
  border: 1px solid #c4cdd5;
  color: #212b36;
}
</style>

<style>
.title-input-box .el-input__inner {
  height: 36px;
}
.title-input-box .el-select {
  width: 100%;
}
.title-input-box .el-select input {
  color: #212b36;
}
.title-input-box .el-input--suffix .el-input__inner {
  background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
  border: 1px solid #c4cdd5;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  border-radius: 3px;
}
.title-input-box .input--limitDate .el-input__inner,
.title-input-box .input--meetUnit .el-input__inner {
  background-color: #f9fafb;
  border: none;
  border-radius: 3px;
}
.title-input-box .input--hostUnit .el-input__inner {
  background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
  border: 1px solid #c4cdd5;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  border-radius: 3px;
  text-align: center;
  color: #212b36;
}
</style>