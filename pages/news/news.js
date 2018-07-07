var app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    navbar: ['全部', '学校新闻', '学院新闻', '校友新闻'],
    currentTab: 0,
    newsArr: '', //新闻
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
    that.setData({ currentTab: e.detail.current });
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
    var dataNewsList = api.getNewsList();  //这是列表的数据
    this.setData({
      newsArr: dataNewsList.data.slice(0, 4),
    })
  },
  // 跳转新闻详情
  hrefNewsDetail: function () {
    wx.navigateTo({
      url: '../newsDetail/newsDetail'
    })
  },
}) 