const app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    payTo: false,
    pick: '',
    desc: false,
    more: false,
    timestamp: '',
    nonceStr: ''
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.getIndexData();
  },
  getIndexData() {
    var dataDonatePeople = api.getDonatePeople();  //这是公司的数据
    console.log(dataDonatePeople);
    this.setData({
      danatePeopleArr: dataDonatePeople.data
    })
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  hrefInfo: function () {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  Pay: function () {
    var that = this;
    // 获取当前时间戳
    that.setData({
      timestamp: String(Math.round(new Date() / 1000))
    })
    // 获取随机函数
    that.setData({
      nonceStr: String(Math.random().toString(36).substr(2, 15))
    })
    // 支付
    wx.requestPayment({
      'timeStamp': that.data.timestamp,
      'nonceStr': that.data.nonceStr,
      'package': 'wx2017033010242291fcfe0db70013231072',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },
  onPayTo: function () {
    var that = this;

    that.setData({
      payTo: !that.data.payTo
    })
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })

    that.animation = animation

    that.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      if (that.data.payTo) {
        animation.translateY(-215).step()
      } else {
        animation.translateY(215).step()
      }

      that.setData({
        animationData: animation.export()
      })
    }.bind(that))
  },
  selectValue: function (e) {
    this.setData({
      pick: e.currentTarget.dataset.pickvalue
    })
    console.log(e);
  },
  clickOpenDesc: function () {
    this.setData({
      desc: true
    })
  },
  clickCloseDesc: function () {
    this.setData({
      desc: false
    })
  },
  openExtend: function () {
    this.setData({
      more: true
    })
  },
  closeExtend: function () {
    this.setData({
      more: false
    })
  }
})