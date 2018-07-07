const app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    confirm: false
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function () {
    var that = this;
    //查看是否登录
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          confirm: true
        })
      }
    })
    //调用应用实例的方法获取首页数据  没有接口 自己模拟
    this.getIndexData();
  },
  getIndexData() {
    var dataDirectory = api.getDirectory();  //这是列表的数据
    this.setData({
      directoryArr: dataDirectory.data
    })
  },
  hrefConfirm: function () {
    wx.navigateTo({
      url: '../confirm/confirm'
    })
  },
  hrefInfo: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  },
  hrefSelect: function () {
    wx.navigateTo({
      url: '../directorySelect/directorySelect',
    })
  },
  hrefChat: function () {
    wx.navigateTo({
      url: '../chat/chat',
    })
  }
})