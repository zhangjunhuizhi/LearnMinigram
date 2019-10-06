// pages/images/images.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChoosePic() {
    wx.chooseImage({
      success: (res) => {
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        // 在小程序中 如果想要渲染到页面中 必须要使用this.setData 不能像vue里的写法一样
        this.setData({
          imagePath: path
        })

      },
    })
  }
})