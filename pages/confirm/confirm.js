Page({
  data: {

  },
  onLoad: function () {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  hrefFillIn: function() {
    wx.navigateTo({
      url: '../fillIn/fillIn'
    })
  }
})