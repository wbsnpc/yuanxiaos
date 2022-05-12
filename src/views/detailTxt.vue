<template>
  <div>
    <v-btn @click="goBack">返回</v-btn>

    <div>
      <div>章节</div>
      <div
        @click="goRead(item.chapterId)"
        class="seaction"
        v-for="(item, index) in sectionObj"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  props: {
    dataObj: {},
  },
  data() {
    return {
      sectionObj: [],
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    this.myPort.detailTxt((res) => {
      console.log(res, "章节搜索");
      this.sectionObj = res.data.data.chapterList;
    }, this.$route.query.id);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goRead(id) {
      console.log(id);
      this.$router.push({
        path: "txtRead",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>
<style scoped>
.section {
  line-height: 30px;
}
</style>
