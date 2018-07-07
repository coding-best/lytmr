var app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    navbar: ['全部', '进行中', '已结束'],
    currentTab: 0,
    recruitArr: '', //新闻
    winWidth: 0,
    winHeight: 0
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  navbarTap: function (e) {
    var that = this;
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 轮播图左右滑动切换索引
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  onLoad: function () {
    // 主轮播图
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth
        });
      }
    });
    //调用应用实例的方法获取首页数据  没有接口 自己模拟
    this.getIndexData();
  },

  getIndexData() {
    var dataActive = api.getActivity();  //这是活动的数据
    this.setData({
      activeArr: dataActive.data,
    })
  },
  hrefActivityDetail: function () {
    wx.navigateTo({
      url: '../activityDetail/activityDetail',
    })
  },
  hrefActivityPost: function () {
    wx.navigateTo({
      url: '../activityPost/activityPost',
    })
  },
  hrefActivitySignUp: function () {
    wx.navigateTo({
      url: '../activitySignUp/activitySignUp',
    })
  },
})