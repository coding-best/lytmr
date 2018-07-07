//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    imgUrls: [
      'http://oo9xy1zeh.bkt.clouddn.com/36D6E352A169752B5C8FC5EB10F0FA2A.png',
      'http://oo9xy1zeh.bkt.clouddn.com/ACC21B69BE6DFEE4B397F55D13C50D39.png'
    ],
    indicatorDots: false,
    swiperCurrent: 0,  //轮播图当前下标
    autoplay: true,
    interval: 5000, //自动切换时间间隔
    duration: 300, //滑动动画时长
    newsArr: '',//新闻
    activeArr: '',
    businessArr: '',
    chooserData: [
      {
        title: '校友录',
        img: 'https://ofdznzfo9.qnssl.com/szdx_%E6%A0%A1%E5%8F%8B%E5%BD%95.png',
        href: 'hrefDirectory'
      }, {
        title: '校企招聘',
        img: 'https://ofdznzfo9.qnssl.com/szdx_%E6%A0%A1%E4%BC%81%E6%8B%9B%E8%81%982.png',
        href: 'hrefRecruit'
      }, {
        title: '需求发布',
        img: 'https://ofdznzfo9.qnssl.com/szdx_%E9%9C%80%E6%B1%82%E5%8F%91%E5%B8%83.png',
        href: 'hrefRelease'
      }, {
        title: '校友企业',
        img: 'https://ofdznzfo9.qnssl.com/szdx_%E6%A0%A1%E5%8F%8B%E4%BC%81%E4%B8%9A.png',
        href: 'hrefBusiness'
      }
    ]
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
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
    var dataNewsList = api.getNewsList();  //这是列表的数据
    var dataNotice = api.getNotice();  //这是公告的数据
    var dataActive = api.getActivity();  //这是活动的数据
    var dataBusiness = api.getBusiness();  //这是公司的数据
    this.setData({
      newsArr: dataNewsList.data.slice(0, 3),
      activeArr: dataActive.data.slice(0, 3),
      businessArr: dataBusiness.data.slice(0, 4)
    })
  },
  // 轮播图切换 小圆点改变
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  // 点击轮播图图片
  tapImg: function (e) {
    // e.currentTarget.dataset.index 
    let index = e.currentTarget.dataset.index
    wx.switchTab({
      url: '../alumni/index'
    })
  },
  // 点击小圆点
  tapDots: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.dataset.dotsindex
    })
  },
  hrefNews: function () {
    wx.navigateTo({
      url: '../news/news'
    })
  },
  hrefDirectory: function () {
    wx.navigateTo({
      url: '../directory/directory'
    })
  },
  hrefRelease: function () {
    wx.navigateTo({
      url: '../release/release'
    })
  },
  herfNewsDetail: function () {
    wx.navigateTo({
      url: '../newsDetail/newsDetail',
    })
  },
  hrefReleaseDetail: function () {
    wx.navigateTo({
      url: '../releaseDetail/releaseDetail',
    })
  },
  hrefRecruit: function () {
    wx.navigateTo({
      url: '../recruit/recruit',
    })
  },
  hrefBusiness: function () {
    wx.navigateTo({
      url: '../business/business',
    })
  },
  hrefBusinessDetailMajor: function () {
    wx.navigateTo({
      url: '../businessDetailMajor/businessDetailMajor',
    })
  },
  // 活動
  hrefActivityDetail: function () {
    wx.navigateTo({
      url: '../activityDetail/activityDetail',
    })
  },
  hrefActivitySignUp: function () {
    wx.navigateTo({
      url: '../activitySignUp/activitySignUp',
    })
  },
  hrefActivity: function () {
    wx.switchTab({
      url: '../activity/activity',
    })
  },
})
