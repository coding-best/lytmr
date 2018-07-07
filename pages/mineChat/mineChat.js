//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    mychat: true
  },
  onLoad: function() {
    this.getIndexData();
  },
  getIndexData() {
    var dataChatList = api.getChat();  //这是私聊的数据
    this.setData({
      ChatArr: dataChatList.data,
    })
  },
  hrefChat: function() {
    wx.navigateTo({
      url: '../chat/chat'
    })
  }
})