// pages/activityForm/activityForm.js
Page({
  data: {
    arr: [],
    info: ['姓名', '手机']
  },
  hrefActivityPost: function () {
    var pages = getCurrentPages();  // 当前页面
    var prevPage = pages[pages.length - 2]; // 上级页面
    // console.log(this.data.info);
    prevPage.setData({
      info: this.data.info
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  // 添加报名项
  addView: function () {
    // 判断最后一项是不是空，是的话就不能接着添加
    if (this.data.info[this.data.info.length-1 ] != '') {
      this.data.info.push('');      
      this.setData({
        info: this.data.info
      })
    } else {
      wx.showToast({
        title: '请填写报名项',
        icon: 'none', // loading
        duration: 1500,
        mask: true
      })
    }
  },
  // 绑定input
  bindKeyInput: function (e) {
    this.data.info[this.data.info.length - 1] = e.detail.value

    this.setData({
      info: this.data.info
    })
  }
})