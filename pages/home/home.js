// pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'
Page({

  data: {

  },

  onLoad: function(options) {
    // 请求轮播图以及推荐数据
    // 1.导入网络请求 network.js
    getMultiData().then(res => {
      console.log(res)
    })
  }
})