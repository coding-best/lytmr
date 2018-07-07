//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: ''
  },
  onLoad() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })

    that.getAccessToken();
  },
  // 跳转到认证页面
  hrefComfirm: function () {
    wx.navigateTo({
      url: '../confirm/confirm',
    })
  },
  // 登录授权(获取临时登录凭证)
  bindGetUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    wx.setStorageSync('userInfo', e.detail.userInfo); //存储userInfo  
  },
  // 获取access token
  getAccessToken: function () {
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
      data: {
        grant_type: 'client_credential',
        appid: "wxba08c85f24399bf2",
        secret: "3d0f1add8ebc3ccb7015856d6ad29356"
      },
      method: 'GET', 
      success: function(res){
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  // 信息编辑
  hrefMineCompile: function (e) {
    var img = e.currentTarget.dataset.img
    wx.navigateTo({
      url: '../mineCompile/mineCompile?img=' + img
    })
  },
  // 校友认证
  hrefMineInfo: function () {
    wx.navigateTo({
      url: '../mineInfo/mineInfo'
    })
  },
  // 我的私信
  hrefMineChat: function () {
    wx.navigateTo({
      url: '../mineChat/mineChat'
    })
  },
  // 我发布的招聘
  hrefMineRecruit: function () {
    wx.navigateTo({
      url: '../mineRecruit/mineRecruit'
    })
  },
  // 我发布的需求
  hrefMineRelease: function () {
    wx.navigateTo({
      url: '../mineRelease/mineRelease'
    })
  },
  // 我发起的活动
  hrefMineActivity: function () {
    wx.navigateTo({
      url: '../mineActivity/mineActivity'
    })
  },
  // 我报名的活动
  hrefMinePartake: function () {
    wx.navigateTo({
      url: '../minePartake/minePartake'
    })
  },
  // 捐赠记录
  hrefMineDonate: function () {
    wx.navigateTo({
      url: '../mineDonate/mineDonate'
    })
  },
  // 联系我们
  hrefMineContact: function () {
    wx.navigateTo({
      url: '../mineContact/mineContact'
    })
  },
})