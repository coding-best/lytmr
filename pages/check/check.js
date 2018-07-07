Page({
  data: {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function() {
    
  },
  hrefDirectory: function() {
    wx.navigateBack({
      delta: 3,
    })
  }
})