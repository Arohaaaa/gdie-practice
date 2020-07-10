<template>
  <div>
    <div class="content_item">
      <div class="content_subtitle">
        <span>{{ title }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.content_subtitle {
  position: relative;
  padding: 24px 0 16px 36px;
  font-size: 18px;
  font-weight: bold;
  color: #212b36;
}
.content_subtitle::before {
  content: "";
  position: absolute;
  left: 22px;
  width: 3px;
  height: 18px;
  background-color: #0072e0;
}
</style>
