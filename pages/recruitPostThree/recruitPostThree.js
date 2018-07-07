Page({
  data: {
    recruitChange: false,
    linkman: '',
    phone: ''
  },
  // 禁用下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onLoad: function (e) {
    console.log(e);
    this.setData({
      recruitChange: e.change
    })
  },
  // 职位联系人
  linkmanInput: function (e) {
    this.setData({
      linkman: e.detail.value
    })
  },
  // 联系电话
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  hrefRecruitSubmit: function () {
    wx.navigateTo({
      url: '../recruitSubmit/recruitSubmit',
    })
  },
  hrefMineRecruitChange: function () {
    var that = this.data;
    if (that.linkman == '' || that.phone == '') {
      wx.showToast({
        title: '请完善招聘信息',
        icon: 'none', // loading
        duration: 2000,
        mask: true
      })
    } else {
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
  }
})