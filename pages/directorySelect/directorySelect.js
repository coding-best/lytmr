//获取应用实例
const app = getApp()
var api = require('../../utils/api.js')
const getInf = (str, key) => str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

Page({
  data: {
    directoryArr: '',
    keyName: '',
    searchValue: '',
    ifSearch: false
  },
  onLoad: function (e) {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  bindKeyInput: function (e) {
    this.setData({
      keyName: e.detail.value,
      ifSearch: true
    })
    this.getIndexData();
    if (e.detail.value == '') {
      this.setData({
        directoryArr: '',
        keyName: '',
        ifSearch: false
      })
    }
  },
  // 获取数据
  getIndexData() {
    var dataDirectory = api.getDirectory();  //这是校友的数据
    this.setData({
      directoryArr: dataDirectory.data,
    })
    var sum = {};
    var num = [];
    for (var i = 0; i < this.data.directoryArr.length; i++) {
      sum[i] = this.data.directoryArr[i].name
      num[i] = getInf(sum[i], this.data.keyName);
    }
    console.log(num);
    this.setData({
      directoryArrName: num
    })
  },
  // 返回校友录
  hrefDirectory: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  // 清除搜索
  clearSearch: function () {
    this.setData({
      searchValue: '',
      directoryArr: '',
      keyName: '',
      ifSearch: false
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
  hrefChat: function () {
    wx.navigateTo({
      url: '../chat/chat',
    })
  }
})