// pages/scroll/scroll.js
Page({
  data: {
    counter: 0,
    inputShowed: false,
    inputVal: "",
    nowtime: new Date().toLocaleString(),
    msg: false,
    mm: 'sssss',
    price: 25.66666
  },
  // 设置一个定时器，时页面上时间每秒改变一次
  onLoad() {
    setInterval(() => {
      this.setData({
        nowtime: new Date().toLocaleString(),
      })
    }, 1000)
  },
  btnyanse() {
    this.setData({
      msg: !this.data.msg
    })
  },

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  handleIncreone() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  tabControlClick(event) {
    console.log(event)
  },
  handleItemNer() {
    // 最终目的：修改my-sel中的counter
    // 1.获取到这个组件（获取组件对象）
    const my_sel = this.selectComponent('.sel-class')
    // 2.通过setData改变对应的值 (这种方式不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })

    // 3.通过调用组件的方法来改变对应的数据才合理
    my_sel.incrementCounter(10)
  }
})