var app = getApp()
var api = require('../../utils/api.js')

Page({
  data: {
    myActivity: true
  },
  onLoad: function() {
    this.getIndexData();
  },
  getIndexData() {
    var dataActive = api.getActivity();  //这是活动的数据
    this.setData({
      activeArr: dataActive.data,
    })
  },
  hrefActivityDetail: function (e) {
    var close = e.currentTarget.dataset.close;
    wx.navigateTo({
      url: '../activityDetail/activityDetail?close=' + close
    })
  },
  closeActivity: function () {
    this.setData({
      layer: true,
    })
  },
  clickCloseLayer: function () {
    this.setData({
      layer: false,
    })
  },
  hrefMineActivityChange: function (e) {
    wx.navigateTo({
      url: '../mineActivityChange/mineActivityChange'
    })
  },
})