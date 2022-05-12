// 自定义全局的存储方法
export default {
    //页面加载时给showTips赋值  showTips(提示文字，信息状态（success/不填）)
    showTips: "",
    //页面弹出框
    //使用方法
    /*
      ------------参数
      title: "", //标题
      info: "", //内容---支持富文本
      notShowCancel: false, //是否不显示取消
      submit: "",//确定回调函数
      cancel: "",//取消回调函数
      submitText: "",//提交文本
      cancelText: "",//删除文本

    this.methods.showModal({
        title:"提示",
        info:"你确定删除<a>111</a>吗?",
        notShowCancel:true,
        submit:(e)=>{
          console.log("成功回调内容")
        },
        cancel:(e)=>{
          console.log("成功回调内容")
        }
      });  
    */
    showModal: "",

}