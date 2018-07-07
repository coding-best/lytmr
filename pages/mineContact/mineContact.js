Page({
  data: {
    more: false
  },
  openMore: function () {
    this.setData({
      more: true
    })
  },
  closeMore: function () {
    this.setData({
      more: false
    })
  }
})