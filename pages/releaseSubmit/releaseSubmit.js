Page({
  data: {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function () {

  },
  hrefRelease: function() {
    wx.navigateBack({
      delta: 2,
    })
  }
})