// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {

  },
  onLoad: function(options) {
    // 1.原声方式发送网络请求
    // 一般onLoad生命周期函数中发送网络请求
    // 1.发送最简单的get请求
    // this.get_data_origin()
    // 2.使用封装的request发送网络请求
    // promise最大的好处就是防止出现回调地狱
    request({
      url:'http://www.liulongbin.top:3005/api/getnewslist'
    })
  },
  // get_data_origin() {
  //   wx.request({
  //     url: 'http://www.liulongbin.top:3005/api/getnewslist',
  //     success: function (res) {
  //       console.log(res)
  //     }
  //   })
  //   // 2.get请求，但是携带参数
  //   wx.request({
  //     url: 'http://www.liulongbin.top:3005/api/getnewslist',
  //     data: {
  //       type: 'sell',
  //       page: 1
  //     },
  //     success: function (res) {
  //       console.log(res)
  //     }
  //   })
  //   // 3.post请求，并且携带参数
  //   wx.request({
  //     url: 'http://httpbin.org/post',
  //     method: 'post',
  //     data: {
  //       name: 'coderwhy',
  //       age: 18
  //     },
  //     success: function (res) {
  //       console.log(res)
  //     }
  //   })
  // }

})