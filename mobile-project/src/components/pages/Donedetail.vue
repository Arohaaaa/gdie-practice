<template>
  <div id="tododetail">
    <!-- <div class="navBar">
      <i class="iconfont icon-left" @click="$router.go(-1)"></i>
      <span class="navBar-title">待办详情</span>
    </div>-->
    <div class="affair" style="border-bottom: 0">
      <p class="affair-content">习近平对全国党委秘书长会议作出重要会议指示，全国人民一起来学习</p>
      <span class="affair-otherInfo">办结时间：2019-01-16 08:30</span>
      <span class="affair-otherInfo">流水号：455542354354</span>
      <span class="affair-otherInfo">当前环节：领导审批</span>
    </div>
    <div class="boldLine"></div>
    <div class="workDetail">
      <h3 class="subtitle">业务详情</h3>
      <ul class="workDetail-content">
        <li class="workDetail-content-item">类型：用车</li>
        <li class="workDetail-content-item">时长：16小时</li>
        <li class="workDetail-content-item">开始时间：2020-04-23 08:45</li>
        <li class="workDetail-content-item">结束时间：2020-04-23 08:45</li>
        <li class="workDetail-content-item">用车事由：参加习近平对全国党委秘书长会议</li>
      </ul>
    </div>
    <div class="boldLine"></div>
    <div class="verifyHistory">
      <h3 class="subtitle">审批历史</h3>
      <ul class="verifyHistory-content">
        <li class="verifyHistory-content-item">
          <div class="item-left">
            <i class="iconfont icon-yuan"></i>
            <div class="item-left-content">
              <span class="personName">苏别绪（综合部）</span>
              <span>环节：领导审批</span>
              <span>接收时间：2020-03-24 10:00</span>
            </div>
          </div>
          <div class="item-finish">
            <span>已完成</span>
          </div>
        </li>
        <div class="horizontalLine"></div>
        <li class="verifyHistory-content-item">
          <div class="item-left">
            <i class="iconfont icon-yiwancheng2"></i>
            <div class="item-left-content">
              <span class="personName">周习（人事部）</span>
              <span>环节：部门审批</span>
              <span>处理时间：2020-03-24 10:00</span>
              <span>处理意见：同意</span>
            </div>
          </div>
          <div class="item-right">
            <span class="item-finish">已完成</span>
          </div>
        </li>
        <div class="horizontalLine"></div>
        <li
          class="verifyHistory-content-item"
          style="border-bottom: 1px solid #e9e9e9;margin-top: .533333rem"
        >
          <div class="item-left">
            <i class="iconfont icon-yiwancheng2">
              <i class="iconfont icon-ellipsis2"></i>
            </i>
            <div class="item-left-content">
              <span class="personName">陈国辉（办公室）</span>
              <span>环节：拟稿</span>
              <span>创建时间：2020-03-24 10:00</span>
            </div>
          </div>
          <div class="item-right">
            <span class="item-finish">已完成</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="spread">
      <i class="iconfont icon-daosajiao"></i>
      <span>展开</span>
    </div>
    <div class="boldLine"></div>
    <div class="verifySuggestion">
      <h3 class="subtitle">审批意见</h3>
      <div class="suggstion-input-box">
        <textarea class="suggestion-input" readonly v-model="suggestions" placeholder="请输入意见内容"></textarea>
        <span v-if="!suggestions" class="suggestion-number">0/500</span>
      </div>
    </div>
    <div class="btn-box">
      <button class="btn" @click="$router.go(-1)">返回</button>
      <button class="btn">去业务系统查看</button>
    </div>
    <van-popup class="popup" v-model="show" position="bottom">
      <li>同意</li>
      <li>保存</li>
      <li>不同意</li>
      <div class="boldLine"></div>
      <li @click="show = false">取消</li>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      suggestions: '同意'
    }
  }
}
</script>