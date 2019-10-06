// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '这是默认标题!',
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})