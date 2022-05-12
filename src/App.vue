<template>
  <div>
    <my-tip ref="tips"></my-tip>
    <router-view />
  </div>
</template>

<script>
import myTip from "./components/myTip.vue";
export default {
  components: {
    myTip,
  },
  data() {
    return {};
  },
  mounted() {
    document.title = "源小说";
    this.methods.showTips = this.$refs.tips.showTips; //调用弹出框方法赋值给全局
  },
};
</script>
<style scoped>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f2f5f8;
}
/*全局滚动条样式*/
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: #b6b6b6;
}
/*全局滚动条样式结束*/
</style>
