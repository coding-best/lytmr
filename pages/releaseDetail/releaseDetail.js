Page({
    data: {
      close: false
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
    },
    // 禁用下拉刷新
    onPullDownRefresh: function () {
      wx.stopPullDownRefresh()
    },
    hrefInfo: function () {
        wx.navigateTo({
            url: '../info/info',
        })
    }
})