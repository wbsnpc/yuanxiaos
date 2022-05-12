<template>
  <div class="txtR" style="height: 100%">
    <div class="contextaa" @click="aaa">
      <div v-for="(item, index) in arr" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //存储在线书架
    // if (!window.localStorage) {
    //   alert("浏览器不支持localstorage");
    // } else {
    //   //主逻辑业务
    //   console.log("Hello world!");
    // }
    // this.myPort.txtSear((res) => {
    //   this.result = res;

    // });
    let that = this;
    console.log(this.$route.query.id, "000");

    this.myPort.txtContent((res) => {
      console.log(res, "内容");
      if (res.data.code == 0) {
        that.arr = res.data.data;
      }
    }, this.$route.query.id);
  },
  data() {
    return {
      result: [],
      arr: [],
    };
  },
  methods: {
    aaa() {
      console.log(11111111);
    },
  },
};
</script>
<style scoped>
.contextaa {
  width: 100%;
  /* overflow-y: auto; */
}
.txtR {
  overflow: hidden;
}
</style>