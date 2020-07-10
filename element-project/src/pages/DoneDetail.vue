<template>
  <div id="todoDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item>已办</el-breadcrumb-item>
      <el-breadcrumb-item>已办详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_wrapper">
      <div class="content_title">
        <span class="title">标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称</span>
      </div>
      <v-item title="基本信息">
        <template>
          <div class="content_item_wrapper">
            <div class="content_item_box">
              <div class="title_content_box wh_33">
                <div class="little_title">当前环节</div>
                <div class="little_content">领导审批</div>
              </div>
              <div class="title_content_box wh_33">
                <div class="little_title">流水号</div>
                <div class="little_content">343463457567</div>
              </div>
              <div class="title_content_box wh_33">
                <div class="little_title">创建时间</div>
                <div class="little_content">2020-04-22 17:50</div>
              </div>
            </div>
          </div>
        </template>
      </v-item>
      <v-item title="业务详情">
        <template>
          <div class="content_item_wrapper">
            <div class="content_item_box">
              <div class="title_content_box wh_25">
                <div class="little_title">类型</div>
                <div class="little_content">事假</div>
              </div>
              <div class="title_content_box wh_25">
                <div class="little_title">时长</div>
                <div class="little_content">16小时</div>
              </div>
              <div class="title_content_box wh_25">
                <div class="little_title">开始时间</div>
                <div class="little_content">2020-04-22 17:50</div>
              </div>
              <div class="title_content_box wh_25">
                <div class="little_title">结束时间</div>
                <div class="little_content">2020-04-22 17:50</div>
              </div>
            </div>
            <div class="content_item_anotherbox">
              <div class="title_content_box wh">
                <div class="little_title">请假事由</div>
                <div class="little_content">家中有事</div>
              </div>
            </div>
            <div class="content_item_additionbox">
              <div class="title_content_box wh">
                <div class="little_title">附件</div>
                <div class="addition_list">
                  <div class="addition_item">
                    <div class="addition_item_left">
                      <div class="addition_item_word">w</div>
                      <div class="addition_item_name">
                        <span>加快建设为产业发展和产品准入提供质量检测支持.docx</span>&nbsp;
                        <span>(1.8MB)</span>
                      </div>
                    </div>
                    <div class="addition_item_right">
                      <span>查看</span>
                      <span>&nbsp;·&nbsp;</span>
                      <span>下载</span>
                    </div>
                  </div>
                  <div class="addition_item">
                    <div class="addition_item_left">
                      <div class="addition_item_pdf">p</div>
                      <div class="addition_item_name">
                        <span>加快建设为产业发展和产品准入提供质量检测支持加快建设为产业发展和产品准入提供质量检测.pdf</span>&nbsp;
                        <span>(1.46MB)</span>
                      </div>
                    </div>
                    <div class="addition_item_right">
                      <span>查看</span>
                      <span>&nbsp;·&nbsp;</span>
                      <span>下载</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </v-item>
      <v-item title="审批历史">
        <template>
          <div class="content_item_verify">
            <div class="verify_segment">
              <div class="verify_left">
                <span class="verify_boldfont">苏别绪</span>
                <span class="verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify_center">
                <div class="verify_center_icon">5</div>
                <div class="verify_center_verticalLine"></div>
              </div>

              <div class="verify_right">
                <span class="verify_boldfont verifying">领导审批</span>
                <span class="verify_department">审核部门：综合部</span>
              </div>
            </div>
            <div class="verify_segment">
              <div class="verify_left">
                <span class="verify_boldfont">周习</span>
                <span class="verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify_center">
                <img class="verify_center_img" src="../assets/img/组 805@2X.png" />
                <div class="verify_center_verticalLine"></div>
              </div>
              <div class="verify_right">
                <span class="verify_boldfont">部门审批</span>
                <span class="verify_department">审核部门：综合部</span>
                <span
                  class="verify_department"
                >审核部门：审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见</span>
              </div>
            </div>
            <div class="verify_ellipsis">
              <div class="verify_left">
                <span class="verify_boldfont">周习</span>
                <span class="verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify_center">
                <img class="verify_center_ellipsis" src="../assets/img/组 810@2X.png" />
                <div class="verify_center_verticalLineUp"></div>
                <img class="verify_center_img" src="../assets/img/组 805@2X.png" />
              </div>
              <div class="verify_right">
                <span class="verify_boldfont">拟稿</span>
                <span class="verify_department">审核部门：综合部</span>
                <span class="verify_department">审核部门：审批意见审批意见审批意见审批意见审批意见审批意见</span>
              </div>
            </div>
          </div>
          <div class="spread">
            <span class="spread_title">展开更多</span>
            <img class="spread_triangle" src="../assets/img/三角下.png" />
          </div>
        </template>
      </v-item>
      <v-item title="审核">
        <template>
          <div class="content_item_suggestions">
            <span class="suggestions_title">处理意见</span>
            <div class="suggestions">
              <input class="suggestions_input" v-model="suggestions" placeholder="请输入处理意见" disabled />
            </div>
          </div>
        </template>
      </v-item>
      <div class="content_btn_box">
        <button class="btn_long">去业务系统查看</button>
      </div>
    </div>
  </div>
</template>

<script>
import DetailSubItem from "../components/DetailSubItem.vue";
export default {
  data() {
    return {
      suggestions: '意见内容意见内容意见内容意见内容意见内容'
    };
  },
  components: {
    "v-item": DetailSubItem,
  },
};
</script>

<style scoped>
#todoDetail {
  background-color: #f5f5f5;
  padding: 26px 30px;
}
.content_wrapper {
  background-color: #fff;
  margin-top: 22px;
  padding-bottom: 24px;
}
.content_title {
  background-color: #eef1f4;
  height: 64px;
  border: 1px solid #dae0e5;
  border-radius: 3px 3px 0 0;
  line-height: 64px;
  color: #212b36;
  font-weight: bold;
  font-size: 18px;
}
.content_title .title {
  margin-left: 24px;
}

.content_item_wrapper {
  display: flex;
  flex-direction: column;
}
.content_item_box,
.content_item_anotherbox {
  display: flex;
  margin: 0 32px;
  background-color: #fff;
  height: 88px;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
}
.content_item_box {
  border-top: 1px solid #dae0e5;
}
.content_item_additionbox {
  display: flex;
  margin: 0 32px;
  padding-top: 20px;
  background-color: #fff;
  border-left: 1px solid #dae0e5;
  border-bottom: 1px solid #dae0e5;
  border-right: 1px solid #dae0e5;
}
.content_item_additionbox .title_content_box {
  border-right: none;
}
.content_item_additionbox .title_content_box .addition_list {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.addition_list .addition_item {
  display: flex;
  margin-bottom: 20px;
}
.addition_list .addition_item .addition_item_left {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.addition_item_left .addition_item_word,
.addition_item_left .addition_item_pdf {
  width: 12px;
  height: 12px;
  text-align: center;
  line-height: 12px;
  color: white;
  font-size: 10px;
}
.addition_item_left .addition_item_word {
  background-color: #5077aa;
}
.addition_item_left .addition_item_pdf {
  background-color: #cf4424;
}
.addition_item_left .addition_item_name {
  display: flex;
  flex-wrap: nowrap;
  margin-left: 8px;
}
.addition_item_left .addition_item_name span:nth-child(1) {
  color: #212b36;
}
.addition_item_left .addition_item_name span:nth-child(2) {
  color: #919eab;
}
.addition_item_right {
  margin-left: 20px;
  color: #0270e0;
}
.addition_item_right span:nth-child(2) {
  font-weight: bold;
}
.addition_list .addition_item .addition_item_right {
  display: flex;
}
.addition_list {
  margin-top: 10px;
}
.title_content_box {
  border-right: none;
}
.addition_list {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.title_content_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  height: 100%;
  border-right: 1px solid #dae0e5;
}
.title_content_box .little_title {
  color: #212b36;
  font-size: 14px;
  font-weight: bolder;
}
.title_content_box .little_content {
  margin-top: 16px;
  color: #212b36;
  font-size: 14px;
}
.wh_33 {
  width: 33%;
}
.wh_25 {
  width: 25%;
}
.wh {
  width: 100%;
}
.content_item_suggestions {
  margin: 0 32px;
  display: flex;
  flex-direction: column;
}
.suggestions_title {
  font-size: 14px;
  color: #212b36;
}
.suggestions {
  margin-top: 8px;
  height: 108px;
  background-color: #eef1f4;
  border: 1px solid #c4cdd5;
  border-radius: 4px;
}
.suggestions_input {
  padding: 10px 0 0 10px;
  background-color: transparent;
  color: #212b36;
  width: 80%;
  border: none;
  outline: none;
  text-align: left;
}
.content_btn_box {
  margin: 24px 0 0 32px;
}
.content_btn_box .btn_long,
.content_btn_box .btn_short {
  outline: none;
  border: none;
  margin-right: 10px;
  color: #212b36;
  font-size: 14px;
}
.content_btn_box .btn_long {
  padding: 8px 16px;
  background-color: #0270e0;
  color: #fff;
  border-radius: 4px;
}
.content_btn_box .btn_short {
  padding: 8px 30px;
  font-size: 14px;
  background-color: #fff;
  color: #212b36;
  border: 1px solid #c4cdd5;
  border-radius: 4px;
}
.content_item_verify {
  display: flex;
  flex-direction: column;
  margin: 0 32px;
  padding: 27px 0 0 15px;
  border: 1px solid #dae0e5;
}
.content_item_verify .verify_segment {
  display: flex;
  margin-bottom: 31px;
}
.content_item_verify .verify_ellipsis {
  display: flex;
  margin: 30px 0 20px 0;
}
.content_item_verify .verify_left,
.content_item_verify .verify_right {
  display: flex;
  flex-direction: column;
}
.content_item_verify .verify_left {
  align-items: flex-end;
  flex-shrink: 0;
}
.content_item_verify .verify_right {
  align-items: flex-start;
}
.verify_boldfont {
  font-weight: bold;
  font-size: 14px;
  color: #212b36;
}
.content_item_verify .verify_left .verifyDate {
  margin-top: 10px;
  font-size: 12px;
  color: #919eab;
}
.content_item_verify .verify_right .verifying {
  color: #2170d9;
}
.content_item_verify .verify_right .verify_department {
  margin-top: 10px;
  font-size: 12px;
  color: #212b36;
}
.content_item_verify .verify_center {
  position: relative;
  margin: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content_item_verify .verify_center .verify_center_icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2170d9;
  color: #fff;
  text-align: center;
  vertical-align: center;
}
.content_item_verify .verify_center .verify_center_verticalLine {
  position: absolute;
  top: 28px;
  width: 1px;
  height: 30px;
  background-color: #dae0e5;
}
.content_item_verify .verify_center .verify_center_verticalLineUp {
  position: absolute;
  top: -34px;
  width: 1px;
  height: 30px;
  background-color: #dae0e5;
}
.content_item_verify .verify_center .verify_center_ellipsis {
  position: absolute;
  top: -56px;
  width: 4px;
  height: 18px;
}
.content_item_verify .verify_center .verify_center_img {
  width: 20px;
  height: 20px;
}
.spread {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 32px;
  height: 38px;
  background-color: #eef1f4;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #dae0e5;
}
.spread .spread_title {
  color: #212b36;
  font-size: 14px;
}
.spread .spread_triangle {
  width: 12px;
}
</style>

<style>
/* 覆盖element默认样式 */
.breadcrumb .el-breadcrumb__inner {
  color: #212b36;
}
.breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {
  color: #45484b;
}
.breadcrumb .el-icon-arrow-right:before {
  color: #212b36;
}
</style>
