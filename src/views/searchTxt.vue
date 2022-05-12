<template>
  <div class="textSear">
    <div class="sear">
      <v-select
        style="width: 20%; margin-right: 5px; font-size: 12px"
        solo
        dense
        :items="items"
        v-model="optionName"
        label="搜索项目"
      ></v-select>

      <v-text-field
        v-if="optionName == '小说名'"
        solo
        dense
        label="请输入小说名"
        v-model="txtName"
        @click:append="searTxt"
        append-icon="mdi-magnify-scan"
        :loading="loading"
        style="width: 65%"
        @keydown.enter="searTxt"
      ></v-text-field>

      <v-select
        v-else
        dense
        solo
        style="width: 65%"
        :items="txtType"
        label="请选择小说类型"
        v-model="selType"
        :loading="loading"
      ></v-select>
    </div>
    <div class="txtbox">
      <v-row v-if="result.length != 0">
        <v-col
          cols="12"
          sm="1"
          lg="4"
          v-for="(item, index) in result"
          :key="index"
        >
          <v-card @click="detailTxt(item)">
            <div class="detail">
              <div class="img">
                <img class="imgTxt" :src="item.cover" alt="" />
              </div>
              <div class="title">
                <div class="textTitle">{{ item.title }}</div>
                <div class="book-profile">{{ item.descs }}</div>
                <div class="book-module">
                  {{ item.author }}<span class="pipe">·</span
                  >{{ item.fictionType }}
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-pagination
      v-if="allPage != 0"
      class="pagego"
      v-model="page"
      :length="allPage"
      :total-visible="7"
      :disabled="disabled"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      result: [],
      txtName: "",
      loading: false,
      allTotal: 0,
      pageSize: 10,
      allPage: 0,
      page: 1,
      disabled: false,
      items: ["小说名", "小说类型"],
      option: "title",
      optionName: "小说名",
      txtType: ["玄幻", "奇幻", "穿越"],
      selType: "", //选择的小说leixing
    };
  },
  watch: {
    "$vuetify.breakpoint.name"(newVal) {
      //监听当前页面的参数变化
      console.log(newVal);
    },
    selType(n) {
      console.log(n);
      if (!!n) {
        this.loading = true;
        this.allTotal = 0;
        this.page = 1;
        this.resultData(n);
      }
    },
    page(n) {
      console.log(n, "page");
      if (!this.txtName) {
        this.allTotal = 0;
        this.result = [];
        return;
      }
      this.resultData();
    },
    allTotal(n) {
      this.allPage = Math.ceil(this.allTotal / this.pageSize);
    },
    optionName(n) {
      console.log(n);
      this.selType = "";
      if (n == "小说名") {
        this.option = "title";
      } else {
        this.option = "fictionType";
      }
    },
  },
  methods: {
    searTxt() {
      if (!this.txtName) {
        this.result = [];
        this.allTotal = 0;
        return;
      }
      this.loading = true;
      this.allTotal = 0;
      this.page = 1;
      this.resultData(this.txtName);
    },
    resultData(key) {
      this.disabled = true;
      this.result = [];
      this.myPort.txtSear(
        (res) => {
          console.log(res);
          if (res.data.code == 0) {
            this.result = res.data.data;
            this.allTotal = this.allTotal == 0 ? res.data.count : this.allTotal;
          } else {
            this.result = [];
            this.methods.showTips(res.data.msg, "success");
          }
          this.disabled = false;
          this.loading = false;
        },
        this.option,
        key,
        this.page
      );
    },
    detailTxt(item) {
      console.log(item, "详细");
      this.$router.push({
        path: "detailTxt",
        query: {
          id: item.fictionId,
        },
      });
      //   this.myPort.detailTxt((res) => {
      //     console.log(res);

      //   }, item.fictionId);
    },
  },
};
</script>
<style scoped>
.textSear {
  height: 100%;
  width: 100%;
  position: relative;
}
.imgTxt {
  width: 95px;
  height: 126px;
  margin-top: 6px;
  margin-left: 5px;
}
.sear {
  width: 100%;
  max-width: 500px;
  display: flex;
  margin: 0px auto;
}

.detail {
  min-width: 200px;
  display: flex;
}

.title {
  flex-grow: 1;
  font-size: 16px !important;
}

.pagego {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
.txtbox {
  padding: 10px;
  position: absolute;
  height: calc(100% - 100px);
  overflow: hidden;
  width: 100%;
  overflow-y: auto;
  margin-top: -20px;
}
.aatxtbox {
  display: flex;
  flex-wrap: wrap;
}

.textTitle {
  font-size: 0.85rem;
  font-weight: normal;
  /* line-height: 0.45rem; */
  /* height: 0.45rem; */
  margin: 0.05rem 9px 0;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 16rem;
}
.book-profile {
  /* color: #979; */
  font-size: 0.35rem;
  margin: 0.17rem 10px;
  line-height: 1.42rem;
  /* height: 0.84rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-indent: 3em;
}
.book-module {
  font-size: 0.24rem;
  float: left;
  text-align: right;
  margin: 0rem 10px;
}
.pipe {
  margin: 0 0.1rem;
}
</style>