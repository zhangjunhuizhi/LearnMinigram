// 必须要先向外暴露 ES6导出的方式
// 如果在别的地方想要导入的话 import request from '/service/network.js'
export default function request(options) {
  wx.request({
    url: options.url,
    method: options.method || 'get',
    data:options.data || {},
    success:function(res){
console.log(res)
    },
    fail: function(err){
      console.log(err)
    }

  })
}