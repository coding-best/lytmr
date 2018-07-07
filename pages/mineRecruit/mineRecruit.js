var app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    myrecruit: true,
    ifchange: false,
    layer: false,
    path: '',// 看看是从哪个页面传过来的
    requires: [{
      content: '3-5年',
      img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4z.png'
    }, {
      content: '大专',
      img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%AD%A6%E5%8E%86z.png'
    }, {
      content: '全职',
      img: 'https://ofdznzfo9.qnssl.com/szdx_%E5%85%A8%E8%81%8Cz.png'
    }]
  },
  onLoad: function (e) {
    console.log(e.path);
    //调用应用实例的方法获取首页数据  没有接口 自己模拟
    this.getIndexData();
  },
  getIndexData() {
    var dataRecruit = api.getRecruit(); //这是列表的数据
    this.setData({
      recruitArr: dataRecruit.data,
    })
  },
  hrefRecruitDetail: function (e) {
    var close = e.currentTarget.dataset.close;
    wx.navigateTo({
      url: '../recruitDetail/recruitDetail?close=' + close
    })
  },
  closeRecruit: function () {
    this.setData({
      layer: true,
    })
  },
  changeRecruit: function () {
    this.setData({
      ifchange: true
    })
  },
  clickCloseLayer: function () {
    this.setData({
      layer: false,
    })
  },
  hrefMineRecruitChange: function (e) {
    wx.navigateTo({
      url: '../mineRecruitChange/mineRecruitChange'
    })
  },
})