Page({
  data: {

  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function () {

  },
  hrefMine: function () {
    wx.showToast({
      title: '已保存',
      icon: 'success',
      duration: 1100,
      success: function (res) {
        setTimeout(() => {
          wx.navigateBack({
            delta: 1,
          })
        }, 1200);
      }
    })
  }
})