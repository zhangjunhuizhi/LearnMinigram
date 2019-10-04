Page({
   // -----1.初始化数据-----
  data: {
    name: 'Coderwhy',
    age:18,
    students:[
      { id: 100, name: 'kobe1', age: 301 },
      { id: 110, name: 'kobe2', age: 302 },
      { id: 120, name: 'kobe3', age: 303 },
      { id: 130, name: 'kobe4', age: 304 },
    ],
    counter:0
  },
  // -----2.监听页面的生命周期函数-----
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      succsess: (res) => {
        console.log(res)
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 当页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
   // -----3.监听wxml中相关的一些事件-----
  handleBtnClick() {
    // 1.界面不会刷新的 错误的方法
    // this.data.counter +=1

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // -----4.监听其他事件-----
  //监听页面滚动到顶部
  onReachBottom() {
    console.log('页面滚动到顶部了1')
  },
  // 监听页面滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面下拉刷新---前提要在json配置文件中打开 endPullDownRefresh:true
  onPullDownRefresh() {
    console.log('页面下拉刷新了!')
  }

})

// -----------------------------------------------------------------

// page/home/home.js
// getApp()获取App()产生的示例对象
// const app = getApp()

// const name = app.globalData.age;
// const age = app.globalData.age;

