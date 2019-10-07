// pages/home/home.js
Page({
  data:{
    title:'哈哈哈'
  },
  handleShowToast() {
      wx.showToast({
        title: '加载中ing',
        icon:'loading'
      })
  },
  // 设置分享转发
  onShareAppMessage:function(options){
  return {
    title:'你好!',
    // 别人点击时进入的哪个页面的地址
    path:'/pages/about/about',
    imageUrl:'http://pic39.nipic.com/20140321/18063302_210604412116_2.jpg'
  }
  }
})