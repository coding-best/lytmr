// pages/mineRelease/mineRelease.js
Page({
  data: {
    myRelease: true,
  },
  onLoad: function() {

  },
  closeRecruit: function () {
    this.setData({
      layer: true,
    })
  },
  clickCloseLayer: function () {
    this.setData({
      layer: false,
    })
  },
  hrefReleaseAnnounce: function (e) {
    var change = e.currentTarget.dataset.change;

    wx.navigateTo({
      url: '../releaseAnnounce/releaseAnnounce?change='+change
    })
  },
  hrefReleaseDetail: function (e) {
    var change = e.currentTarget.dataset.change;

    wx.navigateTo({
      url: '../releaseDetail/releaseDetail?change=' + change
    })
  },
})