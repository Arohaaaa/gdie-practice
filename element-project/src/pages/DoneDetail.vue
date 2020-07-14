<template>
  <div id="detail">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item to="/done/doneTable">已办</el-breadcrumb-item>
      <el-breadcrumb-item to="/done/donedetail">已办详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="content__title-box">
        <span class="content__title"
          >标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称</span
        >
      </div>
      <v-item title="基本信息">
        <template>
          <div class="content__item-wrapper">
            <div class="content__item-box">
              <div class="title-content-box wh_33">
                <div class="item__title">当前环节</div>
                <div class="item__content">领导审批</div>
              </div>
              <div class="title-content-box wh_33">
                <div class="item__title">流水号</div>
                <div class="item__content">343463457567</div>
              </div>
              <div class="title-content-box wh_33">
                <div class="item__title">创建时间</div>
                <div class="item__content">2020-04-22 17:50</div>
              </div>
            </div>
          </div>
        </template>
      </v-item>
      <v-item title="业务详情">
        <template>
          <div class="content__item-wrapper">
            <div class="content__item-box">
              <div class="title-content-box wh_25">
                <div class="item__title">类型</div>
                <div class="item__content">事假</div>
              </div>
              <div class="title-content-box wh_25">
                <div class="item__title">时长</div>
                <div class="item__content">16小时</div>
              </div>
              <div class="title-content-box wh_25">
                <div class="item__title">开始时间</div>
                <div class="item__content">2020-04-22 17:50</div>
              </div>
              <div class="title-content-box wh_25">
                <div class="item__title">结束时间</div>
                <div class="item__content">2020-04-22 17:50</div>
              </div>
            </div>
            <div class="content__item-anotherbox">
              <div class="title-content-box wh">
                <div class="item__title">请假事由</div>
                <div class="item__content">家中有事</div>
              </div>
            </div>
            <div class="content__item-additionbox">
              <div class="title-content-box wh">
                <div class="item__title">附件</div>
                <div class="item__addition-box">
                  <div class="item__addition">
                    <div class="item__addition--left">
                      <div class="item__addition--word">w</div>
                      <div class="item__addition-name">
                        <span
                          >加快建设为产业发展和产品准入提供质量检测支持.docx</span
                        >&nbsp;
                        <span>(1.8MB)</span>
                      </div>
                    </div>
                    <div class="item__addition--right">
                      <span>查看</span>
                      <span>&nbsp;·&nbsp;</span>
                      <span>下载</span>
                    </div>
                  </div>
                  <div class="item__addition">
                    <div class="item__addition--left">
                      <div class="item__addition--pdf">p</div>
                      <div class="item__addition-name">
                        <span
                          >加快建设为产业发展和产品准入提供质量检测支持加快建设为产业发展和产品准入提供质量检测.pdf</span
                        >&nbsp;
                        <span>(1.46MB)</span>
                      </div>
                    </div>
                    <div class="item__addition--right">
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
          <div class="content__item-verify">
            <div class="verify-segment">
              <div class="verify-segment__left">
                <span class="verify-segment--fontbold">苏别绪</span>
                <span class="verify-segment__verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify-segment__center">
                <div class="verify-segment__centericon">5</div>
                <div class="verify-segment--verticalLine"></div>
              </div>
              <div class="verify-segment__right">
                <span class="verify-segment--fontbold verify-segment--verifying"
                  >领导审批</span
                >
                <span class="verify-segment__dapartment">审核部门：综合部</span>
              </div>
            </div>
            <div class="verify-segment">
              <div class="verify-segment__left">
                <span class="verify-segment--fontbold">周习</span>
                <span class="verify-segment__verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify-segment__center">
                <img
                  class="verify-segment__centerimg"
                  src="../assets/img/组 805@2X.png"
                />
                <div class="verify-segment--verticalLine"></div>
              </div>
              <div class="verify-segment__right">
                <span class="verify-segment--fontbold">部门审批</span>
                <span class="verify-segment__dapartment">审核部门：综合部</span>
                <span class="verify-segment__dapartment"
                  >审核部门：审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见审批意见</span
                >
              </div>
            </div>
            <div class="verify-ellipsis">
              <div class="verify-segment__left">
                <span class="verify-segment--fontbold">周习</span>
                <span class="verify-segment__verifyDate">2020-04-22 17:50</span>
              </div>
              <div class="verify-segment__center">
                <img
                  class="verify-segment--ellipsis"
                  src="../assets/img/组 810@2X.png"
                />
                <div class="verify-segment--verticalLineUp"></div>
                <img
                  class="verify-segment__centerimg"
                  src="../assets/img/组 805@2X.png"
                />
              </div>
              <div class="verify-segment__right">
                <span class="verify-segment--fontbold">拟稿</span>
                <span class="verify-segment__dapartment">审核部门：综合部</span>
                <span class="verify-segment__dapartment"
                  >审核部门：审批意见审批意见审批意见审批意见审批意见审批意见</span
                >
              </div>
            </div>
          </div>
          <div class="spread">
            <span class="spread__title">展开更多</span>
            <img class="spread__triangle" src="../assets/img/三角下.png" />
          </div>
        </template>
      </v-item>
      <v-item title="审核">
        <template>
          <div class="content__item-suggestions">
            <span class="suggestions__title">处理意见</span>
            <div class="suggestions__content suggestions__content--disabled">
              <input
                class="suggestions__input"
                v-model="suggestions"
                placeholder="请输入处理意见"
                disabled
              />
            </div>
          </div>
        </template>
      </v-item>
      <div class="content__btn-box">
        <button class="content__btn--long">去业务系统查看</button>
      </div>
    </div>
  </div>
</template>

<script>
import DetailSubItem from "../components/DetailSubItem.vue";
export default {
  data() {
    return {
      suggestions: "意见内容意见内容意见内容意见内容意见内容",
    };
  },
  components: {
    "v-item": DetailSubItem,
  },
};
</script>
