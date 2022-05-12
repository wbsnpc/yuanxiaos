<template>
  <v-app class="app">
    <v-app-bar app>
      <!-- @click="openOrClose()" -->
      <v-icon color="red">mdi-alien-outline</v-icon>
    </v-app-bar>

    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid class="context">
        <!-- 如果使用 vue-router -->
        <!-- <router-view /> -->

        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive">
          <!-- 这里是不被缓存的视图组件，比如 page3 -->
        </router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <v-bottom-navigation :value="value" color="teal" grow>
        <v-btn to="searchTxt">
          <span>搜索</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn to="bookHome">
          <span>书架</span>
          <v-icon>mdi-map-marker</v-icon>
          <!-- <v-img src="../images/online.png"></v-img> -->
        </v-btn>

        <v-btn to="localBookHome">
          <span>本地书架</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>
<script>
import bottomNav from "../components/bottomNav.vue";
export default {
  components: {
    bottomNav,
  },

  data() {
    return {
      value: 1,
      right: null,
      showNavigator: false,
      isShowIcon: false,
      tag: "indexPage",
      expand: false,
      openNav: {},
    };
  },
  watch: {
    "$vuetify.breakpoint.name"(newVal) {
      //监听当前页面的参数变化
      this.autoShowNavigator(newVal);
    },
    showNavigator() {
      this.isShowIcon = !this.showNavigator;
    },
  },
  created() {
    this.autoShowNavigator(this.$vuetify.breakpoint.name);
  },
  mounted() {
    if (this.$router.history.current.path !== "/") {
      this.tag = this.$router.history.current.path.substring(6);
    }
  },
  methods: {
    //动态设置左侧导航栏
    autoShowNavigator(val) {
      this.isShowIcon = val != "lg" && val != "xl";
      this.showNavigator = !this.isShowIcon;
    },
    openOrClose() {
      this.showNavigator = this.isShowIcon;
      this.isShowIcon = !this.isShowIcon;
    },
  },
};
</script>
<style >
.app {
  overflow: hidden;
}
/*全局滚动条样式*/
::-webkit-scrollbar {
  width: 0px;
  height: 14px;
}

::-webkit-scrollbar-thumb {
  background-color: #eb3903;
}
.context {
  height: 100%;
  width: 100%;
  padding: 8px !important;
  background-image: linear-gradient(147deg, #f5baca 0%, #51a2e8 74%);
  overflow: hidden;
  overflow-y: auto;
}
/*全局滚动条样式结束*/
</style>