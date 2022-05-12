<template>
  <v-snackbar centered v-model="snackbar" :color="color" :timeout="timeout">
    {{ msg }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 3000,
      msg: "",
      color: "red",
    };
  },
  methods: {
    showTips(msg, type) {
      this.msg = msg;
      if (type == "success") {
        //成功
        this.color = "green";
      } else {
        this.color = "red";
      }
      this.snackbar = true;
      console.log(type, this.color, "mytip");
    },
  },
};
</script>

<style>
</style>