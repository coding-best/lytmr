const app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    myDonate: true
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function () {
    //调用应用实例的方法获取首页数据  没有接口 自己模拟
    this.getIndexData();
  },
  getIndexData() {
    var dataDirectory = api.getDirectory();  //这是列表的数据
    this.setData({
      directoryArr: dataDirectory.data
    })
  },
  hrefInfo: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  }
})