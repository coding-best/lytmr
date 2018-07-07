var app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    navbar: ['全部', '进行中', '已下线'],
    currentTab: 0,
    newsArr: '', //新闻
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  onLoad: function () {
    //调用应用实例的方法获取首页数据  没有接口 自己模拟
    this.getIndexData();
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getIndexData() {
    var dataDonate = api.getDonate();  //这是列表的数据
    this.setData({
      donateArr: dataDonate.data
    })
    console.log(dataDonate.data);
  },
  hrefDonateDetail: function() {
    wx.navigateTo({
      url: '../donateDetail/donateDetail'
    })
  },
  hrefDonateIntroduce: function () {
    wx.navigateTo({
      url: '../donateIntroduce/donateIntroduce'
    })
  },
}) 