Page({
  data: {
    extend: false
  },
  hrefActivitySignUp: function () {
    wx.navigateTo({
      url: '../activitySignUp/activitySignUp',
    })
  },
  hrefInfo: function () {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  openExtend: function () {
    this.setData({
      extend: true
    })
  },
  closeExtend: function () {
    this.setData({
      extend: false
    })
  }
})