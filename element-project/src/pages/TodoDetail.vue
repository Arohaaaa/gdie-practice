<template>
  <div id="detail">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item to="/todo/todotable">待办</el-breadcrumb-item>
      <el-breadcrumb-item to="/todo/tododetail">待办详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-detail">
      <div class="content__title-box">
        <span class="content__title">{{ detailInfoObj.instName }}</span>
      </div>
      <v-item title="基本信息">
        <template>
          <div class="content__item-wrapper">
            <div class="content__item-box">
              <div class="title-content-box ">
                <div class="item__title">当前环节</div>
                <div class="item__content">{{ detailInfoObj.nodeName }}</div>
              </div>
              <div class="title-content-box ">
                <div class="item__title">流水号</div>
                <div class="item__content">
                  {{ detailInfoObj.serialNumber }}
                </div>
              </div>
              <div class="title-content-box ">
                <div class="item__title">创建时间</div>
                <div class="item__content">{{ detailInfoObj.createTime }}</div>
              </div>
            </div>
          </div>
        </template>
      </v-item>
      <v-item title="业务详情">
        <template>
          <div class="content__item-wrapper">
            <div class="content__item-box">
              <template v-for="item in detailInfoObj.businessData">
                <div
                  class="title-content-box"
                  :class="[item.isFile == 'y' ? 'class-flex' : '']"
                >
                  <div class="item__title">{{ item.name }}</div>
                  <div v-if="item.isFile == 'n'" class="item__content">
                    {{ item.value }}
                  </div>
                  <div v-else class="item__addition-box">
                    <div v-for="file in item.files" class="item__addition">
                      <div class="item__addition--left">
                        <div
                          class="iconfont"
                          :class="[
                            file.fileType == 'doc' ? 'icon-word' : 'icon-zip',
                          ]"
                        ></div>
                        <div class="item__addition-name">
                          <span>{{ file.name + "." + file.fileType }}</span>
                          <span class="filesize">{{
                            "(" + (file.fileSize / 1024).toFixed(2) + "MB)"
                          }}</span>
                        </div>
                      </div>
                      <div class="item__addition--right">
                        <template v-if="file.previewUrl">
                          <a :href="file.previewUrl">查看</a>
                          <span style="margin:0 8px">·</span>
                        </template>
                        <a :href="file.downloadUrl">下载</a>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
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
            <div class="suggestions__content">
              <input class="suggestions__input" placeholder="请输入处理意见" />
            </div>
          </div>
        </template>
      </v-item>
      <div class="content__btn-box">
        <button class="content__btn--long">跳转到业务系统</button>
        <button class="content__btn--short">同意</button>
        <button class="content__btn--short">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ESTAxios } from "../plugins/public.js";
import "../assets/css/detail.css";
import DetailSubItem from "../components/DetailSubItem.vue";
export default {
  data() {
    return {
      serialNumber: 0,
      detailInfoObj: {},
    };
  },
  components: {
    "v-item": DetailSubItem,
  },
  methods: {
    getDetailInfo(serialNumber) {
      let that = this;
      ESTAxios({
        url: "/workitem",
        data: {
          serialNumber: serialNumber,
        },
        success: function(res) {
          that.detailInfoObj = res.data;
          that.$session.set("detailInfo", res.data);
          console.log(that.detailInfoObj);
        },
      });
    },
  },
  mounted() {
    if (this.$route.params.serialNumber == undefined) {
      this.detailInfoObj = this.$session.get("detailInfo");
    } else {
      this.serialNumber = this.$route.params.serialNumber;
      this.getDetailInfo(this.serialNumber);
    }
  },
};
</script>
